import React, { Component } from 'react';
import './movie.css';
import PropTypes from 'prop-types';

function Movie ({title, poster}){
    return(
        <div>
            <MoviePoster poster = {poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster ({poster}){
    return(
        <img src= {poster} alt="Movie Poster"/>
    )
    
}

//부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알 수 있음.
Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;