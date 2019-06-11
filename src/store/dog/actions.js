export const API_CALL_REQUEST = 'API_CALL_REQUEST';

export const fetchDog = () => ({
    type: API_CALL_REQUEST,
    request: {
        url: 'https://dog.ceo/api/breeds/image/random',
    },
});