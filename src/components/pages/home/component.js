import React from 'react'
import {Grid, CardContent, Typography, Card} from '@material-ui/core'

class Component extends React.Component {
    componentDidMount() {
        const {state, actions} = this.props
        actions.getProvinsi()
    }

    _renderListProvinsi = () => {
        const { state } = this.props
        const list = state.indonesia.daftarProvinsi 
        return list.map((item, keys) => (
            <Grid item xs={12} md={6} lg={4} style={{padding: '8px'}}>
                <Card variant="outlined" key={item.id}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        No. {keys+1}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {item.nama}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))
    }

    render() {
        const {state, actions} = this.props
        return(
            <Grid container>
                {this._renderListProvinsi()}
            </Grid>
        )
    }
}

export default Component