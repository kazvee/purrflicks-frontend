import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import MovieForm from '../forms/MovieForm';

const EditMovieModal = ({ movie, open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editing this movie</DialogTitle>
      <DialogContent>
        <MovieForm defaultEditValues={movie} onSubmit={onSubmit} />
      </DialogContent>

      <DialogActions>
        <Button
          variant='contained'
          color='error'
          form='movie-form'
          children='Cancel'
          onClick={onClose}
        />
        <Button
          variant='contained'
          color='success'
          form='movie-form'
          type='submit'
          children='Update movie details'
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default EditMovieModal;
