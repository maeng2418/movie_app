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
    setTimeout(() => {
      this.setState({
        movies : [
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
          },
          {
            title : "IronMan",
            poster : "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F116F1B10AD71A328F2"
          }
        ]
      })
    },5000)
  }

  _renderMovies = () => {
    {/*map은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환*/}
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key={index} />
      //movie요소들을 가지고 Movie 컴포넌트에 정보 보냄
    })

    return movies
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
