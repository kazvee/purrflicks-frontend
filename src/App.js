import React from 'react';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CataloguePage from './pages/CataloguePage';
import FavouritesPage from './pages/FavouritesPage';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [favouritesMovies, setFavouritesMovies] = useState([]);

  const onAdd = (id) => {
    const movie = allMovies.find((movie) => movie._id === id);
    const tempFavouritesMovies = Array.from(favouritesMovies);
    tempFavouritesMovies.push(movie);
    setFavouritesMovies(tempFavouritesMovies);
  };

  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route
          path='/admin'
          element={
            <AdminPage allMovies={allMovies} setAllMovies={setAllMovies} />
          }
        />
        <Route
          path='/'
          element={<CataloguePage movies={allMovies} onAdd={onAdd} />}
        />
        <Route
          path='/favourites'
          element={
            <FavouritesPage
              favouritesMovies={favouritesMovies}
              setFavouritesMovies={setFavouritesMovies}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
