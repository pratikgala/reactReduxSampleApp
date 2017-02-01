import React from 'react';
import UserListContainer from '../containers/user-list-container';
import MovieListContainer from '../containers/movie-list-container';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Users List:</h2>
        <UserListContainer/>
        <br/>
        <h2>Movies List:</h2>
        <br/>
        <MovieListContainer/>
    </div>
);

export default App;

