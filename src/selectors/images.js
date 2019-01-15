const getState = state => state || {};

export const getImages = state => getState(state).images.items || {};

export default {
    getImages
};
