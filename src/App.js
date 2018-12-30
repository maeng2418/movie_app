import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

const movies = [
  {
    title : "Matrix",
    poster : "http://image.cine21.com/resize/cine21/poster/2016/0907/14_41_49__57cfa89dd00cd[X230,330].jpg"
  },
  {
    title : "HungerGame",
    poster : "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2014/10/2014102322402016916.jpg"
  },
  {
    title : "Oldboy",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg"
  },
  {
    title : "StarWars",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
  }
]

//Render : componentWillMount() -> render() -> componentDidMount()
//Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

class App extends Component {

  componentWillMount(){
    console.log("Will mount")
  }

  componentDidMount(){
    console.log("Did mount")
  }

  render() {
    console.log("Did render")
    return (
      <div className="App">
        {/*map은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환*/}
        {movies.map((movie, index) =>{
          return <Movie title = {movie.title} poster = {movie.poster} key={index} />
          //movie요소들을 가지고 Movie 컴포넌트에 정보 보냄
        })}
      </div>
    );
  }
}

export default App;
