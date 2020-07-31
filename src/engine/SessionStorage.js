export default class SessionStorage {
    static getUserId() {
        return sessionStorage.getItem("userId")
    }
    static getUserName() { 
        return sessionStorage.getItem("userName")
    }
    static setUserId(id) {
        sessionStorage.setItem("userId", id)
    }
    static setUserName(name) {
        sessionStorage.setItem("userName", name)
    }
    static removeUserId() {
        sessionStorage.removeItem("userId")
    }
    static removeUserName() {
        sessionStorage.removeItem("userName")
    }
}