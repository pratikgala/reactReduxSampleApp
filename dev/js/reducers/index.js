import {combineReducers} from 'redux';

/*Here we are creating a bunch of reducers files for our store
* normally store take information from the reducers
* Reducer --> Store --> Provider --> Component*/
import UserReducers from './reducer-users';
import MovieReducers from './reducer-movies';

const allReducers = combineReducers({
    users: UserReducers,
    movie: MovieReducers
});

export default allReducers;