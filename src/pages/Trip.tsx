import { useParams } from 'react-router-dom';

function Trip() {
  // 👇️ get ID from url
  const params = useParams();

  console.log(params); // 👉️ {userId: '4200'}

  return <h2>userId is 👉️ {params.tripId}</h2>;
}

export default Trip;