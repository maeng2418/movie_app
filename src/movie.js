import React, { Component } from 'react';
import './movie.css';
import PropTypes from 'prop-types';

function Movie ({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Colums">
            <MoviePoster poster = {poster}/>
            </div>
            <h1>{title}</h1>
            <div className="Movie_Genres">
                {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
            </div>
            <p className = "Movie_Synopsis">
                {synopsis}
            </p>
        </div>
    )
}

function MoviePoster ({poster, alt}){
    return(
        <img src= {poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
    
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

//부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알 수 있음.
Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre :PropTypes.string.isRequired
}

export default Movie;