import React from 'react'
import {Grid, CardContent, Typography, Card} from '@material-ui/core'

class Component extends React.Component {
    async componentDidMount() {
        const {state, actions} = this.props
        await actions.getProvinsi()
    }

    _renderListProvinsi = () => {
        const { state } = this.props
        const list = state.provinsi.daftarProvinsi
        if (state.provinsi.error) {
            return (
                <p>Maaf, Ada error bro..</p>
            )
        }else {
            return list.map((item, keys) => (
                <Grid key={item.id} item xs={12} md={6} lg={4} style={{padding: '8px'}}>
                    <Card variant="outlined">
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
    }

    _renderLoading = () => (
        <p>Loading..</p>
    )

    render() {
        const {state, actions} = this.props
        return(
            <Grid container>
                {state.provinsi.loading ? this._renderLoading() : this._renderListProvinsi()}
            </Grid>
        )
    }
}

export default Component