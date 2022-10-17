import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeIcon from '@mui/icons-material/Home';

const navData = [
  {
    id: 0,
    text: 'Home',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    id: 1,
    text: 'Trips',
    link: '/trips',
    icon: <FlightTakeoffIcon />,
  },
];

export default navData;
