import React from 'react'
import {Grid, Container} from '@material-ui/core'
import Header from '../../elements/appbar'

export default class Component extends React.Component {
    render() {
        const {children} = this.props
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Header/>
                <Container style={{padding: '16px 0px'}}>
                    {children}
                </Container>
            </Grid>
        )
    }
}