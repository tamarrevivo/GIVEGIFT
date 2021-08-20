import * as actionTypes from "../ActionTypes";
const initialState = {
    giftArr: []
}
export const giftReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GIFT_GET:
            console.log({ ...state, giftArr: [...action.newGift] })
            return { ...state, giftArr: [...action.newGift] };
    }
    return state;
}
