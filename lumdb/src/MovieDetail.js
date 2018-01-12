/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';  


class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=131b1383b3f0956a2add417762690dee`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    const {movie} = this.state;
    return (
        <div>
            <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />

            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
        </div>
    );
  }
}

export default MovieDetail;
