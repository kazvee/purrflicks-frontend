import React from 'react';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './pages/Catalogue';

function App() {
  const [allMovies, setAllMovies] = useState([]);

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
        <Route path='/' element={<Catalogue movies={allMovies} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
