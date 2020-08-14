import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchImagesSuccess = (images) => {
    return {
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        images
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
        axios.get(`/search/photos?query=${query}`)
            .then(res => {
                const images = res.data.results.map(image => ({
                    id: image.id,
                    title: image.alt_description,
                    src: image.urls.small
                }))
                dispatch(fetchImagesSuccess(images))
            })
            .catch(err => {
                dispatch(fetchImagesFailed(err))
            })
    }
}
