import jsonPlaceholder from '../apis/jsonPlaceholder';

//action creator
export const selectSong = (song) => {
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song,
    };
};

//experimentado con async en actions
//con redux-thunk podemos retornar una funcion y tambien una funcion asincrona
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data,
    });
};

export const fetchUsers = () => async (distpach) => {
    const response = await jsonPlaceholder.get('/users');
    distpach({
        type: 'FETCH_USERS',
        payload: response.data,
    });
};
