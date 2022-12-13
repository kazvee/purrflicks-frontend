import React from 'react';
import MovieInfo from '../components/MovieInfo';
import Button from '@mui/material/Button';

const MovieCatalogue = ({ movie, onAdd }) => {
  return (
    <>
      <MovieInfo movie={movie} />

      <Button
        onClick={() => onAdd(movie._id)}
        sx={{
          background: 'deeppink',
          color: 'black',
          height: 50,
          width: 1,
          margin: 0,
          padding: 0,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          boxShadow: 3,
        }}
      >
        Add Movie to Favourites
      </Button>
    </>
  );
};

export default MovieCatalogue;
