import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea"
  },
  {
    title: "Full Metal Jacket",
    poster: "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201507/13/40/b0113440_55a2ef988b4f8.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI"
  },
  {
    title: "Star Wars",
    poster: "https://t1.daumcdn.net/cfile/tistory/223BE445567253F028"
  }
]

class App extends Component {

  state = {
    greeting: 'hello!'
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello again!'
    //   })
    // }, 5000)
    this.setState({
      greeting: 'Hello again!'
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
