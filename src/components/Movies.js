import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        { movies.map( (movie, i) => (
          <div key={i}>
            <h4> { movie.title } <br/> Run Time: { movie.time } </h4>
            <ul> { movie.genres.map( (genre, x) => ( <li key={x}> {genre} </li> ) ) } </ul>
          </div>
          )
        )}
    </div>
  );
};

export default Movies;
