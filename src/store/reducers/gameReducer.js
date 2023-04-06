import {
    SAVE_BRIEF_DATA
} from './actionType';

const initialState = {
    briefData: null
}
const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_BRIEF_DATA:
            console.log("save brief: ", action.payload)
            return {
                ...state,
                briefData: action.payload
            }
            break;
        default: return state
    }
}
export default gameReducer;