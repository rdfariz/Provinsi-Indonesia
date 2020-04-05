import React from 'react'
import {AppBar, Grid, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default class Component extends React.Component {
    appbar = () => {
        return (
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
    footer = () => {
        return (
            <p>Footer</p>
        )
    }

    render() {
        const {children} = this.props
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {this.appbar()}
                {children}
                {this.footer()}
            </Grid>
        )
    }
}