import SessionStorage from './SessionStorage'
import Socket from '../api/socket'

export default class Session {
    static loggedInCallbacks = []
    static tryReLogin = () => {
        const sessionUserName = SessionStorage.getUserName()

        if (sessionUserName) {
            Socket.login(sessionUserName)
        }

        return sessionUserName
    }
    static Login = (userName) => {
        Socket.registerToLogin(() => {
            Session.initSession(userName)
            
            Session.loggedInCallbacks.forEach((callback) => {
                callback(userName)
            })
        })

        Socket.login(userName)
    }
    static registerToLogin = (callback) => {
        Session.loggedInCallbacks.push(callback)
    }
    static initSession = (userName) => {
        SessionStorage.setUserName(userName)
    }
    static getSession = () => {
        return SessionStorage.getUserName()
    }
}