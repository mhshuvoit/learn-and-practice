// const add = (a, b) => a + b
// const sub = (a, b) => a - b
// const div = (a, b) => a / b

// // module.add = (a, b) => a + b

// module.exports.test = (a, b) => add(a, b) / sub(a, b)

// module.exports.add = add

const path = require('path')
const os = require('os')

let obj = {
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
}
console.log(path.format(obj))

// console.log(path.basename(__filename))

// console.log(os.type())



// ==================================
// FS
//2.8 writeFile
// const fs = require('fs')

// const obj = {
//     name: 'mh shuvo',
//     email: 'mhs@gmil.com',
//     address: {
//         city: 'kushtia'
//     }
// }

// const data = JSON.stringify(obj)

// fs.writeFile('./data.json', data, (err) => {
// if(err) {
//     console.log(err)
// } else {
//     console.log('success')
// }
// })


// 2.9 readFile
// fs.readFile('./data.json', (err, data)=> {
//     if(err) {
//         console.log(err)
//     }

//     let obj = JSON.parse(data)
//     console.log(obj)

// })


// 2.10 HTTP
// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.end('<h1>This is nice</h1>')
// })

// server.listen(2121, () => {
//     console.log('Server is running on port 2121')
// })



// 2.11 NodeJS File + HTTP Module Fun 
// const fs = require('fs')
// const http = require('http')

// const server = http.createServer((req, res) => {
//     fs.readFile('./index.html', (err, data) => {
//         res.write(data)
//         res.end()
//     })
// })
// server.listen(2121, () => {
//     console.log('Server is running on port 2121')
// })



// 5.Middleware
const express = require('express')

function customMiddleware(req, res, next) {
    if(req.url === '/about') {
        res.send('<h1>You can not visit</h1>')
    }
}

function tinnylogger() {
    return (req, res, next) => {
        console.log(`${req.method} - ${req.url}`)
    }
}

const Middleware = [customMiddleware, tinnylogger]
app.use(Middleware)