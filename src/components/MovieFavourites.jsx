import React from 'react';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import MovieInfo from './MovieInfo';

const MovieFavourites = ({ movie }) => {
  return (
    <>
      <MovieInfo movie={movie} />
      <Stack direction='row'>
        <Button
          sx={{
            background: 'crimson',
            color: 'black',
            height: 50,
            width: 1,
            margin: 0,
            padding: 0,
            borderBottomLeftRadius: 25,
            boxShadow: 3,
          }}
        >
          Delete Movie
        </Button>

        <Button
          sx={{
            background: 'darkorange',
            color: 'black',
            height: 50,
            width: 1,
            margin: 0,
            padding: 0,
            borderBottomRightRadius: 25,
            boxShadow: 3,
          }}
        >
          Add Movie
        </Button>
      </Stack>
    </>
  );
};

export default MovieFavourites;
