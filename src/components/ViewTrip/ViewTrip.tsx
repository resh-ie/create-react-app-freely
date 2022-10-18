import { List, ListItem, ListItemText } from '@mui/material';

import styles from './_viewTrip.module.scss';
import TripHeader from '../TripHeader/TripHeader';

interface ViewTripProps {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  destinations: string[];
}
const ViewTrip = ({
  name,
  startDate,
  endDate,
  status,
  destinations,
}: ViewTripProps) => {
  return (
    <div>
      <TripHeader
        name={name}
        startDate={startDate}
        endDate={endDate}
        status={status}
      />
      <div className={styles.list}>
        <List>
          {destinations.length > 0 ? (
            destinations.map((destination) => (
              <ListItem key={destination}>
                <ListItemText primary={destination} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary='No destinations added yet' />
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );
};

export default ViewTrip;
