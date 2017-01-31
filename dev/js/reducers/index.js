import {combineReducers} from 'redux';
import UserReducers from './reducer-users';
import MovieReducers from './reducer-movies';

const allReducers = combineReducers({
    users: UserReducers,
    movie: MovieReducers
});
