import React from 'react';
import MovieListCatalogue from '../components/MovieListCatalogue';
import Container from '@mui/system/Container';

const CataloguePage = ({ movies, onAdd }) => {
  return (
    <Container maxWidth='lg' sx={{ margin: 2 }}>
      <MovieListCatalogue movies={movies} onAdd={onAdd} />
    </Container>
  );
};

export default CataloguePage;
