import React, {Component} from 'react'
import Container from '@material-ui/core/Container'
import {Box} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import AppHeader from '../AppHeader/AppHeader'
import TodoList from '../TodoList/TodoList'
import ItemAddForm from '../ItemAddForm/ItemAddForm'
import ApiService from '../ApiService/ApiService'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            todoData : [],
        }
    }

    async componentDidMount() {
        const res = await ApiService.get('/')
        this.setState({ todoData: res.data})
    }

    addListItem = (text) => {
        const newItem = {
            label: text,
            checkedB: false,
            id: uuidv4()
        }
        this.setState({
            todoData: [...this.state.todoData, newItem]
        })
        ApiService.post('/', newItem)
    }

    deleteListItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = todoData.filter(item => item.id !== id)
            return {
                todoData: newArray
            }
        })
        ApiService.delete(`/${id}`)
    }

    onToggleDone = (id) => {
        const newTodoData = this.state.todoData.find(item => item.id === id)
        ApiService.patch(`/${id}`, {
            checkedB: !newTodoData.checkedB
        })

        this.setState(({ todoData }) => {
            const idx = this.state.todoData.findIndex((el) => el.id === id)
            const oldItem = this.state.todoData[idx]
            const newItem = {...oldItem, checkedB: !oldItem.checkedB}
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ]
            return {
                todoData: newArray
            }
        })
    }

    editListItem = (text, id) => {
        const newTodoData = this.state.todoData.find(item => item.id === id)
        ApiService.patch(`/${id}`, {
            label: text,
            checkedB: newTodoData.checkedB,
            id
        })
        this.setState(({ todoData }) => {
            const idx = this.state.todoData.findIndex((el) => el.id === id)
            const oldItem = this.state.todoData[idx]
            const newItem = {...oldItem, label: text}
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ]
            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <Container maxWidth='sm'>
                <Box boxShadow={3}>
                    <AppHeader />
                    <ItemAddForm addListItem={this.addListItem}/>
                    <TodoList todos={this.state.todoData}
                              onDeleted={this.deleteListItem}
                              onToggleDone={this.onToggleDone}
                              editListItem={this.editListItem}/>
                </Box>
            </Container>
        )
    }
}