import React from 'react';
import Grid from '@mui/material/Grid';
import MovieFavourites from './MovieFavourites';

const MovieListFavourites = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {movies.map((movie) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={movie._id}>
            <MovieFavourites movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieListFavourites;
