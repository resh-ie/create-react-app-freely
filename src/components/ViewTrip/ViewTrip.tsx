import { List, ListItem, ListItemText } from '@mui/material';

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
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {destinations.map((destination: string, index: number) => (
          <ListItem key={index}>
            <ListItemText primary={destination} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ViewTrip;
