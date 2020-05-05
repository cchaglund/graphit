const express = require('express')
const fileupload = require('express-fileupload')
const path = require('path')
const fs = require('fs');
const app = express()
const port = 5000

app.use(fileupload())

const buildDirectory = '/Users/christoferhaglund/Documents/Skola/assignments/graphit/app/frontend/build'

console.log(buildDirectory)

// Serve the static files from the React app
app.use(express.static(buildDirectory));

// app.get('/api', (req, res) => {
//     res.send({answer:'Hello World!'})
// })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(buildDirectory + '/index.html');
});

// app.post('/upload', (req, res) => {
//     const file = req.files.file

//     let parsedData = JSON.parse(file.data);
//     res.send(parsedData)
//     // const path = __dirname + '/files/' + file.name

//     // file.mv(path, (error) => {
//     //     if (error) {
//     //     console.error(error)
//     //     res.writeHead(500, {
//     //         'Content-Type': 'application/json'
//     //     })
//     //     res.end(JSON.stringify({ status: 'error', message: error }))
//     //     return
//     //     }

//     //     res.writeHead(200, {
//     //     'Content-Type': 'application/json'
//     //     })
//     //     res.end(JSON.stringify({ status: 'success', path: '/files/' + file.name }))
//     // })
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))