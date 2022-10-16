import { useEffect } from "react";
import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import { NavData } from "./components/NavBar/NavData";
import { fetchTripsData } from "./utils/mockApi";

const App = () => {
  useEffect(() => {
    fetchTripsData().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <NavBar navData={NavData} />
      <h1>Freely react app template</h1>
    </div>
  );
};

export default App;
