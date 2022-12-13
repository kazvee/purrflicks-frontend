import React from 'react';
import MovieListCatalogue from '../components/MovieListCatalogue';
import Container from '@mui/system/Container';

const Catalogue = ({ movies }) => {
  return (
    <Container maxWidth='lg' sx={{ margin: 2 }}>
      <MovieListCatalogue movies={movies} />
    </Container>
  );
};

export default Catalogue;
