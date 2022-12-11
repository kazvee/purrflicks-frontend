import React from 'react';
import { useState } from 'react';
import { Fab } from '@mui/material';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Container from '@mui/material/Container';
import AddMovieModal from '../modals/AddMovieModal';

const AdminPage = () => {
  const [isAddMovieModalVisible, setIsAddMovieModalVisible] = useState(false);

  const handleOnSubmit = (product) => {
    console.log(product);
  };

  return (
    <Container>
      <Fab
        variant='extended'
        onClick={() => setIsAddMovieModalVisible(true)}
        sx={{
          backgroundColor: 'pink',
          color: 'deeppink',
          '&:hover': {
            backgroundColor: 'deeppink',
            color: 'white',
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
      <AddMovieModal
        open={isAddMovieModalVisible}
        onClose={() => setIsAddMovieModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </Container>
  );
};

export default AdminPage;
