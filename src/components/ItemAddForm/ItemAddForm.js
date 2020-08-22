import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import teal from '@material-ui/core/colors/teal'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
       this.setState({
           label: e.target.value
       })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.label) {
            this.props.addListItem(this.state.label)
        }
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <Box
                style={{margin: '10px'}}>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.onSubmit}>

                    <TextField
                        autoFocus={true}
                        label='Add a task'
                        variant="outlined"
                        color='secondary'
                        margin='normal'
                        style={{width: '410px'}}
                        onChange={this.onLabelChange}
                        value={this.state.label}
                    />

                    <Button
                        tabIndex={-1}
                        size="large"
                        variant="outlined"
                        color="primary"
                        type='submit'
                        style={{margin: '16px 0 0 16px',
                            background: teal[500],
                            borderRadius: 3,
                            border: 0,
                            color: 'white',
                            height: 55,
                            width: 100,
                            textAlign: 'center'}}
                    >
                        Add
                    </Button>
                </form>
            </Box>
        )
    }
}