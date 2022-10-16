import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import { NavData } from './components/NavBar/NavData';
import Home from './pages/Home';
import Trip from './pages/Trip';
import Trips from './pages/Trips';
import { fetchTripsData } from './utils/mockApi';



const App = () => {

  useEffect(() => {
    fetchTripsData().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <NavBar navData={NavData} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trips' element={<Trips />} />
          <Route path="/trips/:tripId" element={<Trip />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
