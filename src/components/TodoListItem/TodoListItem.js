import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import ListItem from '@material-ui/core/ListItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

export default class TodoListItem extends Component {

    state = {
        newLabel: this.props.label,
        onFocus: false,
    }

    onLabelChange = (e) => {
        this.setState({
            newLabel: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.editListItem(this.state.newLabel, this.props.id)
        this.setState({
            onFocus: false
        })
    }

    onFocusItem = () => {
        this.setState({
            onFocus: true
        })
    }

    onBlurItem = () => {
        this.setState({
            onFocus: false,
        })
    }

    render() {
        const { label, checkedB, onDeleted, onToggleDone } = this.props
        return(
            <ListItem>
                <FormControlLabel
                    control={
                        <Checkbox
                            tabIndex={-1}
                            checked={checkedB}
                            onChange={onToggleDone}
                            name="checkedB"
                            color='primary'
                        />
                    }
                />

                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.onSubmit}

                >

                    { this.state.onFocus
                        ? <TextField
                            autoFocus={true}
                            tabIndex={-1}
                            required={true}
                            style={{width: '398px', marginRight: '10px'}}
                            defaultValue={label}
                            onChange={this.onLabelChange}
                            onBlur={this.onBlurItem}
                          />
                        : <div
                            onFocus={this.onFocusItem}
                            tabIndex={0}
                            style={{width: '398px', marginRight: '10px'}}
                        >
                            {label}
                          </div>
                    }
                </form>

                <Button
                    tabIndex={-1}
                    variant="contained"
                    color="secondary"
                    onClick={ onDeleted }>
                    <DeleteForeverIcon />
                </Button>
            </ListItem>
        )
    }
}
