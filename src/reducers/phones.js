import * as R from 'ramda'
import {FETCH_PHONES_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            console.log(payload)
            console.log(newValues)
            return R.merge(state, newValues)
        default:
            return state
    }

};