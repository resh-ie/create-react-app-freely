import { useAtom } from 'jotai';
import { useNavigate, useParams } from 'react-router-dom';

import { tripAtom } from '../atoms/tripAtom';
import ViewTrip from '../components/ViewTrip/ViewTrip';

function Trip() {
  // 👇️ get ID from url
  const params = useParams();
  const navigate = useNavigate();
  const [trip] = useAtom(tripAtom);

  // 👇️ get trip from atom
  const currentTrip = trip.find((trip) => trip.id === params.tripId);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <ViewTrip
        name={currentTrip?.name ?? 'No Trip Name Provided'}
        startDate={currentTrip?.startDate ?? 'No Start Date Provided'}
        endDate={currentTrip?.endDate ?? 'No End Date Provided'}
        status={currentTrip?.status ?? 'NOT_STARTED'}
        destinations={currentTrip?.destinations ?? []}
      />
    </div>
  );
}

export default Trip;
