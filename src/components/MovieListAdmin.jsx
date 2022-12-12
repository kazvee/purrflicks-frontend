import React from 'react';
import Grid from '@mui/material/Grid';
import MovieAdmin from './MovieAdmin';

const MovieListAdmin = ({ movies, handleOnEdit, handleOnDelete }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {movies.map((movie) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={movie._id}>
            <MovieAdmin
              movie={movie}
              handleOnEdit={handleOnEdit}
              handleOnDelete={handleOnDelete}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieListAdmin;
