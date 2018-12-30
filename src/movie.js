import React, { Component } from 'react';
import './movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{
    //부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알 수 있음.
    static propTypes = {
        title : PropTypes.string,
        poster : PropTypes.string
    }
    render(){
        return(
            <div>
                <MoviePoster poster = {this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src= {this.props.poster}/>
        )
    }
}

export default Movie;