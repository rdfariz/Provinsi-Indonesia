import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import initStore from '../src/store/index'
import Base from '../src/components/layouts/base'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux';

class Index extends App {
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <React.Fragment>
                <Head>
                    <title>Pijar Mahir</title>
                </Head>
                <Provider store={store}>
                    <Base>
                        <Component {...pageProps} />
                    </Base>
                </Provider>
            </React.Fragment>
        )
    }
}

export default withRedux(initStore)(Index)