import { useEffect } from 'react';
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import { NavData } from './components/NavBar/NavData';
import Home from './pages/Home';
import Trips from './pages/Trips';
import { fetchTripsData } from './utils/mockApi';

const App = () => {
  useEffect(() => {
    fetchTripsData().then((data) => console.log(data));
  }, []);

  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/trips':
      component = <Trips />;
      break;
  }

  return (
    <div>
      <NavBar navData={NavData} />
      <div className='container'>{component}</div>
    </div>
  );
};

export default App;
