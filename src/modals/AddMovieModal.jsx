import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import MovieForm from '../forms/MovieForm';

const AddMovieModal = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a new movie</DialogTitle>
      <DialogContent>
        <MovieForm onSubmit={onSubmit} />
      </DialogContent>

      <DialogActions>
        <Button
          variant='contained'
          color='error'
          form='movie-form'
          type='reset'
          children='Clear Form'
        />
        <Button
          variant='contained'
          color='success'
          form='movie-form'
          type='submit'
          children='Add Movie'
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddMovieModal;
