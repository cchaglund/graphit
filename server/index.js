const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
    res.send({answer:'Hello World!'})
})

app.get('*', (req, res) => {
    res.send('asdf!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))