import { Trip } from "../models/trip";
import trips from "./trip-list.json";

export const fetchTripsData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return trips as Trip[];
};
