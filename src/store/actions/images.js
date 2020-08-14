import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchImagesSuccess = (images) => {
    return {
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        images: images
    }
}

export const fetchImagesFailed = (error) => {
    return {
        type: actionTypes.FETCH_IMAGES_FAILED,
        error: error
    }
}

export const fetchImagesStart = () => {
    return {
        type: actionTypes.FETCH_IMAGES_START
    }
}

export const saveSearchQuery = (query) => {
    return {
        type: actionTypes.SAVE_SEARCH_QUERY,
        query
    }
}

export const fetchImages = (query) => {
    return dispatch => {
        dispatch(fetchImagesStart());
        // TODO: delete
        console.log(query)
        axios.get(`/`)
            .then(res => {
                // TODO: delete
                console.log(res)
                dispatch(fetchImagesSuccess(res))
            })
            .catch(err => {
                dispatch(fetchImagesFailed(err))
            })
    }
}
