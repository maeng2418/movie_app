import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

//Render : componentWillMount() -> render() -> componentDidMount()
//Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

class App extends Component {
  //state를 변경하면, render가 새로운 state와 함께 다시 작동한다.
  state = {

  }

  componentWillMount(){
    console.log("Will mount")
  }

  componentDidMount(){
    console.log("Did mount")
    this._getMovies();
  }

  //render -> "Loading"... -> componentDidMount -> getMovies -> 영화가 업데이트 <- callApi <- fetch
  //영화 객체가 하나씩 받아보면서 동시에 업데이트됨.

  _renderMovies = () => {
    {/*map은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환*/}
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie
        title = {movie.title_english}
        poster = {movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
      //movie요소들을 가지고 Movie 컴포넌트에 정보 보냄
    })

    return movies
  }

  //async로 무비 정보 가져옴과 동시에 업데이트. await으로는 무비정보를 가져온 다음에 업데이트 시켜야되니깐 순서를 내에서 정해줌?
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies //최신자바스크립트 표현. 원래는 movies : movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err=>console.log(err))
  }

  render() {
    console.log("Did render")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
