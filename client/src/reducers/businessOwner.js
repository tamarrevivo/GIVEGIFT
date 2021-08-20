import * as actionTypes from "../ActionTypes";
const initialState = {
    businessOwnerArr: []
    //     selectedCourse: null
}
export const businessOwnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUSINESSOWNER_ADD:
            let arr = [...state.businessOwnerArr, action.newBusinessOwner]
            return {
                ...state,
                businessOwnerArr:arr
            }        
    }
    return state;

}

