/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {Poster} from './Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';


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

  let detail = (
    <h1>Hi</h1>
  );
  
  if (this.state.movie.title) {
    detail = (
      <h1>Hello</h1>
    );
  }

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
      <MovieInfo>
        <Overdrive id={movie.id}>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
          <div>
            { this.state.movie.title ? (<h1>Hello!</h1>) : (<h1>Hi</h1>) }
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align:left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -74px;
  }
`;
