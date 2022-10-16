import { useAtom } from 'jotai';

import { tripAtom } from '../atoms/tripAtom';
import Card from '../components/Card/Card';

const Trips = () => {
  const [trips] = useAtom(tripAtom);
  return (
    <div>
      <h1>Trips</h1>
      {trips.map((trip) => (
        <div key={trip.id}>
          <Card title={trip.name} startDate={trip.startDate} endDate={trip.endDate} status={trip.status} />
        </div>
      ))}
    </div>
  );
};

export default Trips;
