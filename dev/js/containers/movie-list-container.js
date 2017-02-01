import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieListContainer extends Component{

    getListOfMovies(){
        return (
            this.props.movie.map( (movie) => {
                return (
                    <li key={movie.id}>{movie.movie} : {movie.genre}</li>
                );
            })
        )
    }

    render(){
        return (
            <ul>
                {this.getListOfMovies()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps)(MovieListContainer);