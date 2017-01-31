import 'babel-polyfill'; // for backward javascript compatibility
import React from 'react';
import ReactDOM from "react-dom";

/*Anything inside curly braces means you only care about that piece from redux function*/
import {createStore} from 'redux';

/* This will query the Reducers/index.js file which has all the reducers stored inside it*/
import allReducers from './reducers';

/* As the follow of information goes from Reducers -> Store -> Providers -> Components
*  The job of the provider is to provide all the stores to the components*/
import {Provider} from 'react-redux';

/* Here we get our app from the component directory */
import App from './components/app';

/*Const helps with performance, and so that we dont accidentally change its value*/
/*Here we are going to use the createStore as function*/

/*What goes inside a store is determined by a reducer*/
const store = createStore(allReducers);

ReactDOM.render(
    /* Provider takes in the store and passes it to the component
    * To access the store go to the component and check it out*/
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
