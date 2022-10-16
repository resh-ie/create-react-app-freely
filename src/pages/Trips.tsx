import { useAtom } from 'jotai';
import {Link} from 'react-router-dom'

import { tripAtom } from '../atoms/tripAtom';
import Card from '../components/Card/Card';

const Trips = () => {
  const [trips] = useAtom(tripAtom);
  return (
    <div>
      <h1>Trips</h1>
      {trips.map((trip) => (
        <div key={trip.id}>
          <Link to={`/trips/${trip.id}`}>
          <Card title={trip.name} startDate={trip.startDate} endDate={trip.endDate} status={trip.status} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Trips;
