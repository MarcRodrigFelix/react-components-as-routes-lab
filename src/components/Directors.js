import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map( (director, i) => (
        <div key={i}>
          <h4> { director.name } </h4>
          <ul>
            { director.movies.map( (movie, x) => ( <li key={x}> { movie } </li> ) )}
          </ul>
        </div>
        )
      )}
    </div>
  );
}

export default Directors
