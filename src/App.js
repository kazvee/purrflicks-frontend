import React from 'react';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import { Fragment, useState } from 'react';

function App() {
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  return (
    <Fragment>
      <Navbar setIsAdminVisible={setIsAdminVisible} />
      {isAdminVisible && (
        <AdminPage allMovies={allMovies} setAllMovies={setAllMovies} />
      )}
    </Fragment>
  );
}

export default App;
