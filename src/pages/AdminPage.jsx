import React from 'react';
import { useState } from 'react';
import { Fab } from '@mui/material';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Container from '@mui/material/Container';
import AddMovieModal from '../modals/AddMovieModal';
import EditMovieModal from '../modals/EditMovieModal';
import MovieListAdmin from '../components/MovieListAdmin';

const AdminPage = ({ allMovies, setAllMovies }) => {
  const [isAddMovieModalVisible, setIsAddMovieModalVisible] = useState(false);
  const [isEditMovieModalVisible, setIsEditMovieModalVisible] = useState(false);
  const [editMovie, setEditMovie] = useState();

  const handleOnSubmit = (movie) => {
    const tempMovies = Array.from(allMovies);
    if (movie._id) {
      const movieIndex = tempMovies.findIndex(
        // eslint-disable-next-line
        (movie) => movie._id === movie._id
      );
      tempMovies[movieIndex] = movie;
    } else
      tempMovies.push({
        ...movie,
        _id: tempMovies.length + 1,
      });
    setAllMovies(tempMovies);
  };

  const handleOnEdit = (movie) => {
    setIsEditMovieModalVisible(true);
    setEditMovie(movie);
  };

  const handleOnDelete = (id) =>
    setAllMovies((previous) => previous.filter((movie) => movie._id !== id));

  return (
    <Container maxWidth='lg' sx={{ margin: 2 }}>
      <Fab
        variant='extended'
        onClick={() => setIsAddMovieModalVisible(true)}
        sx={{
          backgroundColor: 'deeppink',
          color: 'white',
          '&:hover': {
            backgroundColor: 'pink',
            color: 'black',
          },
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          fontFamily: 'Helvetica Neue',
        }}
      >
        <AddCircleOutline sx={{ mr: 1 }} />
        Add a new movie
      </Fab>

      <MovieListAdmin
        movies={allMovies}
        handleOnEdit={handleOnEdit}
        handleOnDelete={handleOnDelete}
      />

      <AddMovieModal
        open={isAddMovieModalVisible}
        onClose={() => setIsAddMovieModalVisible(false)}
        onSubmit={handleOnSubmit}
      />

      <EditMovieModal
        open={isEditMovieModalVisible}
        onClose={() => setIsEditMovieModalVisible(false)}
        onSubmit={handleOnSubmit}
        movie={editMovie}
      />
    </Container>
  );
};

export default AdminPage;
