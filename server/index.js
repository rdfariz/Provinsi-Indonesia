const express = require('express')
const next = require('next')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const server = express()

const axios = require('axios')

app.prepare().then(()=>{    
    server.get('/api/provinsi', cors(), (req, res, next)=>{
        axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').then(response=>{
            res.json(response.data)
        })
    })
    server.get('*', (req, res)=>{
        return handle(req, res)
    })

    server.listen(3000, (err)=>{
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex)=>{
    console.error(ex.stack)
    process.exit(1)
})