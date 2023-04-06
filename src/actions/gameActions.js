import {
    SAVE_BRIEF_DATA
    } from '../store/reducers/actionType'

export const saveBriefData = (data) => dispatch => {
    dispatch({
        type: SAVE_BRIEF_DATA,
        payload: data
    })
}