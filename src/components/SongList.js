import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/';
import styled from 'styled-components';

const MyBtnSelected = styled.button`
    background-color: tomato;
    border: 2px solid black;
    border-radius: 5px;
    height: 40px;

    &:hover {
        color: white;
    }
`;

const SongList = (props) => {
    console.log(props);

    const onChange = (name) => (name1) => (name2) => (event) => {
        console.log('name: ', name);
        console.log('name1: ', name1);
        console.log('name2:', name2);
        console.log('event: ', event);
    };

    const onChange2 = (name, name1, name2) => (event) => {
        console.log('name: ', name);
        console.log('name1: ', name1);
        console.log('name2:', name2);
        console.log('event: ', event);
    };

    const SongsList = props.songs.map((song) => (
        <div
            key={song.title}
            style={{
                background: 'skyblue',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <h1>{song.title}</h1>
            <MyBtnSelected onClick={() => props.selectSong(song)}>
                <b>Select Song</b>
            </MyBtnSelected>
        </div>
    ));
    return (
        <div
            style={{
                background: 'skyblue',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {SongsList}
            <input onChange={onChange2('luis', 'angel', 'javier')}></input>
        </div>
    );
};

const mapStateToProps = (songs) => {
    return songs;
};

// function myFunction() {
//     return function myFunctionReturn() {
//         console.log('test');
//     };
// }
// myFunction()();

//basicamente cada vez que queramos obtener los states de nuestro Store
// podemos llamara la funcion connect que donde el primer parametro es
// una funcion que obtiene los states y el segundo parametro recibe
// los states en sus props, en JS escribir puro myFunction()()
// si hacemos eso, en el primer parentesis ejecuta la funcion "myFunction" y
// el segundo parentesis ejecuta la funcion de retorno, esto es JS puro

export default connect(mapStateToProps, { selectSong })(SongList);
