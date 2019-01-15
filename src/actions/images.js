export const actionTypes = {
    IMAGES_LOAD_REQUEST: 'IMAGES_LOAD_REQUEST',
    IMAGES_LOAD_SUCCESS: 'IMAGES_LOAD_SUCCESS',
    IMAGES_LOAD_FAILURE: 'IMAGES_LOAD_FAILURE'
};

const getImages = () => {

    // Bypass CORS issue via proxy
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo';

    return fetch(PROXY_URL + API_URL,
        {
            method: 'GET',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

};

export function loadImages(appId, query) {

    return async dispatch => {

        dispatch({type: actionTypes.IMAGES_LOAD_REQUEST});

        try {
            const response = await getImages();
            const data = await response.json();

            dispatch({
                data: data,
                type: actionTypes.IMAGES_LOAD_SUCCESS
            });

        } catch (error) {
            dispatch({
                error,
                type: actionTypes.IMAGES_LOAD_FAILURE
            });
        }

    };
};
