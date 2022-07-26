import { useEffect } from "react";
import { fetchTripsData } from "./utils/mockApi";

const App = () => {
  useEffect(() => {
    fetchTripsData().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Freely react app template</h1>
    </div>
  );
};

export default App;
