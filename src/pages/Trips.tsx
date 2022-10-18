import { CircularProgress, Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { tripAtom } from '../atoms/tripAtom';
import Card from '../components/Card/Card';

const Trips = () => {
  const [trips] = useAtom(tripAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [parentSize, setParentSize] = useState(0);
  const parentRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const { clientHeight, clientWidth } = parentRef.current;
    setParentSize(Math.max(clientHeight, clientWidth));
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);
  return (
    <div>
      <div
        style={{
          width: '100vh',
          height: '100%',
        }}
        ref={parentRef}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isLoading ? (
            <CircularProgress size={parentSize} />
          ) : (
            <>
              {trips.map((trip: any) => (
                <Grid item xs={6} key={trip.id}>
                  <Link
                    to={`/trips/${trip.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card
                      title={trip.name}
                      startDate={trip.startDate}
                      endDate={trip.endDate}
                      status={trip.status}
                    />
                  </Link>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Trips;
