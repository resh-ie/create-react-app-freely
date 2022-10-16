import trips from "./trip-list.json";
import { Trip } from "../models/trip";

export const fetchTripsData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return trips as Trip[];
};
