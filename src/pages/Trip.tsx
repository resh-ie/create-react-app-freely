import { Container, Paper } from '@mui/material';
import { useAtom } from 'jotai';
import { useNavigate, useParams } from 'react-router-dom';

import { tripAtom } from '../atoms/tripAtom';
import ButtonIcon from '../components/Button/ButtonIcon/ButtonIcon';
import ViewTrip from '../components/ViewTrip/ViewTrip';

function Trip() {
  const params = useParams();
  const navigate = useNavigate();
  const [trip] = useAtom(tripAtom);

  const currentTrip = trip.find((trip) => trip.id === params.tripId);
  return (
    <div>
      <Container component='main' maxWidth='lg' sx={{ mb: 10 }}>
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <ButtonIcon
            icon='arrow-back'
            onClick={() => navigate(-1)}
            label='Go Back'
          />
          <ViewTrip
            name={currentTrip?.name ?? 'No Trip Name Provided'}
            startDate={currentTrip?.startDate ?? 'No Start Date Provided'}
            endDate={currentTrip?.endDate ?? 'No End Date Provided'}
            status={currentTrip?.status ?? 'NOT_STARTED'}
            destinations={currentTrip?.destinations ?? []}
          />
        </Paper>
      </Container>
    </div>
  );
}

export default Trip;
