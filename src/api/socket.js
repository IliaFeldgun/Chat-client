import SocketIO from 'socket.io-client'
const SOCKET_ENPOINT = process.env.REACT_APP_CLUB_API_SERVER
const socket = SocketIO(SOCKET_ENPOINT)

export default class Socket {
    static registerToMessage = (callback) => {
        socket.on('message', callback)
    }
    static registerToBulkMessage = (callback) => {
        socket.on('bulk-message', callback)
    }
    static registerToUsers = (callback) => {
        socket.on('users', callback)
    }
    static registerToLogin = (callback) => {
        socket.on('logged-in', callback)
    }
    static registerToError = (callback) => {
        socket.on('error', callback)
    }
    static sendMessage = (message) => {
        socket.emit('message', {
            message
        })
    }
    static login = (userName) => {
        socket.emit('login', userName)
    }
}