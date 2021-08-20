import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const addBusinessOwner = (businessOwner) => {
    return {
        type: actionTypes.BUSINESSOWNER_ADD,
        newBusinessOwner: businessOwner
    }
}
export const postBusinessOwner = (businessOwner) => {
    return (dispach) => {
        axios.post("http://localhost:5000/businessOwners", businessOwner).then(succ => {
            dispach(addBusinessOwner(succ.data))
            alert("בעל העסק התווסף בהצלחה!!!")
        }).catch(err => { console.log("ההוספה לא הצליחה"); })
    }
}
