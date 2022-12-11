import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Box, Grid, TextField } from '@mui/material';

const MovieForm = ({ onSubmit, defaultEditValues }) => {
  const defaultValues = {
    name: '',
    synopsis: '',
    genre: '',
    releaseDate: '',
    movieUrl: '',
    coverImageUrl: '',
  };

  const movieFormSchema = yup.object().shape({
    name: yup.string().required('You must add a movie name'),
    synopsis: yup.string().required('You must add a synopsis'),
    genre: yup.string().required('You must add a genre'),
    releaseDate: yup
      .number()
      .required()
      .typeError('You must add the release year as a number'),
    coverImageUrl: yup.string().required('You must add a cover image Url'),
    movieUrl: yup.string().required('You must add a movie Url'),
  });

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultEditValues || defaultValues,
    resolver: yupResolver(movieFormSchema),
    mode: 'all',
  });

  const coverImageUrlValue = watch('coverImageUrl');

  return (
    <Box
      id='movie-form'
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset(defaultValues)}
      sx={{ padding: '20px' }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='name'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Movie Name'
                variant='outlined'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='synopsis'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Synopsis'
                variant='outlined'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name='genre'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Genre'
                variant='outlined'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name='releaseDate'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Release Year (YYYY)'
                variant='outlined'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name='movieUrl'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Movie URL'
                variant='outlined'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name='coverImageUrl'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Cover Image URL'
                variant='outlined'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>

        {!!coverImageUrlValue && (
          <Grid item xs={12}>
            <Box
              sx={{ width: '100%' }}
              component='img'
              src={coverImageUrlValue}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MovieForm;
