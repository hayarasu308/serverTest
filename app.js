var express = require('express');
var bodyParser = require('body-parser')
var http = require('http');
var path = require('path')
var nameTable = require('./db')

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('port', 3300);

var server = http.createServer(app);
var io = require('socket.io').listen(server)
const { ADD_CHARA, FETCH_CHARA, UPDATE_INC, UPDATE_DEC, DELETE_CHARA } = require('./src/socketEvent')

const fetch = async () => {
    const names = await nameTable.findAll().catch(() => [])
    const characterArray = names.map(obj => obj.dataValues)
    io.emit(FETCH_CHARA, characterArray)
}

io.sockets.on('connection', (socket) => {
    console.log('connected')
    socket.on(ADD_CHARA, async (name, age) => {
        await nameTable.create({ name, age })
        fetch()
    })

    socket.on(FETCH_CHARA, async () => {
        fetch()
    })

    socket.on(UPDATE_INC, async name => {
        await nameTable.increment('age', { by: 1, where: { name: name } })
        fetch()
    })

    socket.on(UPDATE_DEC, async name => {
        await nameTable.decrement('age', { by: 1, where: { name: name } })
        fetch()
    })

    socket.on(DELETE_CHARA, async name => {
        await nameTable.destroy({where: { name: name } })
        fetch()
    })
})

server.listen(3300);
