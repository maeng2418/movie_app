import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

const movies = [
  "Matrix",
  "HungerGame",
  "Oldboy",
  "StarWars"
]

const moviePoster = [
  "http://image.cine21.com/resize/cine21/poster/2016/0907/14_41_49__57cfa89dd00cd[X230,330].jpg",
  "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2014/10/2014102322402016916.jpg",
  "data:image/jpeg;base64,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",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title = {movies[0]} poster = {moviePoster[0]}/> {/*Movie 컴포넌트*/}
        <Movie title = {movies[1]} poster = {moviePoster[1]}/> {/*Movie 컴포넌트에 title정보 보냄*/}
        <Movie title = {movies[2]} poster = {moviePoster[2]}/>
        <Movie title = {movies[3]} poster = {moviePoster[3]}/>
      </div>
    );
  }
}

export default App;
