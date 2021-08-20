import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const getAllGift = (gift) => {
    return {
        type: actionTypes.GIFT_GET,
        newGift: gift
    }
}
export const getGift = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/gifts")
            .then(succ => {
                dispatch(getAllGift(succ.data))
            }).catch(err => console.log("============this is mistake" + err.message))
    }
}