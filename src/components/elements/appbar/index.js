import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'

export default class Header extends React.Component {
    render() {
        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" >
                        Provinsi Di Indonesia
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}