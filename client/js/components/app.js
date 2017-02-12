import React from 'react';
import UserListContainer from '../containers/user-list-container';
import MovieListContainer from '../containers/movie-list-container';
import ActiveUserContainer from '../containers/active-user-list-container'
require('../../scss/style.scss');


/* Components can be thought of basically dump structures,
   all the important logic is mainly in containers*/
const App = () => (
    <div>
        <h2>Users List:</h2>
        <UserListContainer/>
        <br/>
        <h2>Movies List:</h2>
        <br/>
        <MovieListContainer/>
        <br/>
        <ActiveUserContainer/>
    </div>
);

export default App;

