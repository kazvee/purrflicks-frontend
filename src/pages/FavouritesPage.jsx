import React from 'react';
import { Container } from '@mui/material';
import MovieListFavourites from '../components/MovieListFavourites';

const FavouritesPage = ({ favouritesMovies, setFavouritesMovies }) => {
  return (
    <Container>
      <MovieListFavourites movies={favouritesMovies} />
    </Container>
  );
};

export default FavouritesPage;
