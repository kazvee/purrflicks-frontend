import React from 'react';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import { Fragment, useState } from 'react';

function App() {
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  return (
    <Fragment>
      <Navbar setIsAdminVisible={setIsAdminVisible} />
      {isAdminVisible && <AdminPage />}
    </Fragment>
  );
}

export default App;
