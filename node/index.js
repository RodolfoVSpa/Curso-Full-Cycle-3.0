const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('<h1>full cycle</h1>')
})

app.listen(port, () => {
    console.log('rodando na ' + port)
})