import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// el provider hacer que todos nuestros componentes
// tengan acceso a nuestro store, mayormente se
// le pasa como parametro al nuestro componente padre
import { Provider } from 'react-redux';

// importamos el createStore para crear nustro Store y
// si queremos usar un middleware usar el el applyMiddleware
// que nos lo ofrece el mismo redux( usaremos redux-thunk)
import { createStore, applyMiddleware } from 'redux';

//importamos nuestros reducers
import reducers from './reducers/index';
//importamos nuestro middleware redux-thunk
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
