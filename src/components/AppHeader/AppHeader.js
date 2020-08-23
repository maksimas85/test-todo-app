import React from 'react'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import { teal } from '@material-ui/core/colors'

const AppHeader = () => {
    return (
        <AppBar className='app-bar'
                position='static'
                style={{background: teal[500]}}>
            <Typography variant='h3' align='center'>
                Todo List App
            </Typography>
        </AppBar>
    )
}

export default AppHeader