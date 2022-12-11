import React from 'react';
import { Fab } from '@mui/material';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Container from '@mui/material/Container';

const AdminPage = () => {
  return (
    <Container>
      <Fab
        variant='extended'
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
    </Container>
  );
};

export default AdminPage;
