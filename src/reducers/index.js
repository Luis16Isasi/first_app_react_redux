import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Me enamore', duration: '3:00' },
        { title: 'disfruto', duration: '2:53' },
        { title: 'te regalo', duration: '3:56' },
        { title: 'vino melon', duration: '2:50' },
        { title: 'purpura', duration: '3:27' },
        { title: 'terraza', duration: '2:58' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') return action.payload;

    return selectedSong;
};

const postsReducer = (posts = [], action) => {
    if (action.type === 'FETCH_POSTS') return action.payload;

    return posts;
};

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS': {
            return action.payload;
        }
        default:
            return users;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    posts: postsReducer,
    users: usersReducer,
});

//                            REGLAS DE UN REDUCER

// 1-NO DEBES DEVOLVER UN VALOR UN 'UNDEFINED', YA SEA AL COMIENZO O EN EJECUCION

// 2-produce "estados" o datos para ser usados dentro de tu aplicación usando sólo
// el estado previo y la acción

// 3-no debe volver a alcanzar "fuera de sí" para decidir qué valor devolver
// (los reductores son puros)

/* export default (state, action) => {
    //bad
    return document.getElementById('test')

    //bad
    return Axios.get('/solicitud')

    //good(debe devolver algo que se hace )
    return state + action;
} */

// 4-no debe devolver su argumento de "state" de entrada
// si nos pasan 'state' debemos devolver agarrar ese estado para obtener otro
// no debemos devolver ese 'state' modificado o mutado
// ya que redux por detras compara el estado anterior y estado a devolver para
// gener rerenders en nuestros compontes, entendiendo como compara JS por detras
// podemos generar que nuestros componentes no se vuelvan a renderizar
