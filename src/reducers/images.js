import {actionTypes} from '../actions/images';

const images = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.IMAGES_LOAD_REQUEST :
            return {
                ...state,
                loading: true
            };
        case actionTypes.IMAGES_LOAD_SUCCESS :
            return {
                items: action.data.hits,
                loading: false
            };
        case actionTypes.IMAGES_LOAD_FAILURE :
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default images;
