import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

    

  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
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
      })
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
