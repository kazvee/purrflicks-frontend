import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='static' style={{ background: 'deeppink' }}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 5,
              fontFamily: 'Helvetica Neue',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              color: 'inherit',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <PetsIcon
              sx={{
                mr: 1,
              }}
            />
            PurrFlicks
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' hover-text='Menu' color='inherit'>
              <PetsIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,

              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link to='/admin' style={{ textDecoration: 'none' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Typography
                  noWrap
                  href='/'
                  sx={{
                    mr: 2,
                    fontFamily: 'Helvetica Neue',
                    fontWeight: 200,
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <SupervisorAccountIcon
                    sx={{
                      mr: 1,
                    }}
                  />
                  Admin
                </Typography>
              </Button>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Typography
                  noWrap
                  href='/'
                  sx={{
                    mr: 2,
                    fontFamily: 'Helvetica Neue',
                    fontWeight: 200,
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <VideoLibraryIcon
                    sx={{
                      mr: 1,
                    }}
                  />
                  Catalogue
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to='/favourites' style={{ textDecoration: 'none' }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Typography
                  noWrap
                  href='/'
                  sx={{
                    mr: 2,
                    fontFamily: 'Helvetica Neue',
                    fontWeight: 200,
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      mr: 1,
                    }}
                  />
                  Favorites
                </Typography>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
