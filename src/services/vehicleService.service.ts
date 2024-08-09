import axios from "axios";
import { ICheckGeofrence, ICreateVehicle } from "../types/vehicle";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
axios.defaults.headers.common["source_code"] =
  "c085645f276fd835042d3730d6a8fc99f6a3f0e8dd3d3ee73f61bbe9db425f13";

//@ts-ignore
axios.defaults.baseURL = `${import.meta.env.VITE_HOST}`;

export const createFeofrence = async (data: ICreateVehicle) => {
  try {
    const response = await axios.post("/add/geofence", data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const checkGeofrence = async (data: ICheckGeofrence) => {
  let payload = new FormData();
  payload.append("latitude ", data.latitude);
  payload.append("longitude", data.longitude);
  payload.append("vehicle_id", data.vehicle_id);
  payload.append("vin", data.vin);
  try {
    const response = await axios.post("/check/geofence");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
