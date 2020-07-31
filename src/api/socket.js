import SocketIO from 'socket.io-client'
const socket = SocketIO("http://localhost:8080")

export default class Socket {
    static registerToMessage = (callback) => {
        socket.on('message', callback)
    }
    static registerToUsers = (callback) => {
        socket.on('users', callback)
    }
    static sendMessage = (message) => {
        socket.emit('message', {
            message,
            timestamp: (new Date()).toISOString().replace('T', ' ').replace('Z', '')
        })
    }
    static login = (userName) => {
        socket.emit('login', userName)
    }
}