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
      <h1>{name}</h1>
      <div>
        {startDate} - {endDate}
      </div>
      <div>{status}</div>
      {destinations.map((destination: string, index: number) => (
        <div key={index}>{destination}</div>
      ))}
    </div>
  );
};

export default ViewTrip;
