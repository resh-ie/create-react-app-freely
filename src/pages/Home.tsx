import { Typography } from '@mui/material';

import TripForm from '../components/Forms/TripForm';

const Home = () => {
  return (
    <div>
      <Typography component='h1' variant='h4' align='center'>
        Welcome to Freely
      </Typography>
      <TripForm />
    </div>
  );
};

export default Home;
