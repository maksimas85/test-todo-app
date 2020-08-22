import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

const TodoList = ({ todos, onDeleted, onToggleDone, editListItem }) => {

    const elements = todos.map((item) => {
        const {id, label, checkedB} = item
        return (
            <TodoListItem
                   key={id}
                   label={label}
                   checkedB={checkedB}
                   onDeleted={ () => onDeleted(id) }
                   onToggleDone={ () => onToggleDone(id) }
                   editListItem={ (text) => editListItem(text, id) }/>
        )
    })

    return (
        <div>
            { elements }
        </div>
    )
}

export default TodoList