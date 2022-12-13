import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';

const MovieInfo = ({ movie }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'pink',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        color: 'deeppink',
        height: 400,
        boxShadow: 3,
      }}
    >
      <Box
        component='img'
        sx={{
          height: 0.4,
          width: 1,
          objectFit: 'cover',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        src={movie.coverImageUrl}
        alt='Movie Cover Image'
      />
      <Stack
        sx={{ height: 0.6, px: 4, width: 0.8 }}
        justifyContent='space-around'
        spacing={2}
      >
        <Stack spacing={1} sx={{ width: 1 }}>
          <Typography fontSize={24}>{movie.name}</Typography>
          <Typography fontSize={16}>{movie.synopsis}</Typography>
        </Stack>
        <Stack spacing={1} sx={{ width: 1 }}>
          <Typography fontSize={18}>{movie.genre}</Typography>
          <Typography fontSize={18}>{movie.releaseDate}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MovieInfo;
