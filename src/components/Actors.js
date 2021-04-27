import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( (actor, i) => 
       (
       <div key={i} >
         <h4> { actor.name } </h4>
         <ul>
           { actor.movies.map( (movie, x) => ( <li key={x}> { movie } </li> )) }
         </ul>
       </div>
       )
      )}
    </div>
  );
};

export default Actors;
