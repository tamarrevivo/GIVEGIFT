import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const addUser = (user) => {
    return {
        type: actionTypes.USER_ADD,
        newUser: user
    }
}
export const postUser = (user) => {
    return (dispach) => {
        axios.post("http://localhost:5000/users", user).then(succ => {
        
            dispach(addUser(succ.data))
            alert("משתמש חדש התווסף בהצלחה!!!")
        }).catch(err => { console.log(err.message); })
    }
}
