import { v4 as uuidv4 } from 'uuid'
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
    hasResult: false,
    firstSearch: true,
    queries: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_IMAGES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                list: [
                    ...state.images,
                    ...action.result
                ],
                hasResult: !!action.result.length,
                firstSearch: false,
                loading: false
            }
        case actionTypes.FETCH_IMAGES_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SAVE_SEARCH_QUERY:
            const newQuery = {
              id: uuidv4(),
              title: action.query
            }
            return {
                ...state,
                queries: [
                  ...state.queries,
                  newQuery
                ]
            }
        default: 
            return state;
    }
}

export default reducer;