import { createContext, ReactNode, useState } from "react";
import {
  ICheckGeofrence,
  ICreateVehicle,
  VehicleContextType,
} from "../types/vehicle";

export const VehicleContext = createContext<VehicleContextType>({
  addGeofrence: () => {},
  checkGeofrence: {
    latitude: "",
    longitude: "",
    vehicle_id: "",
    vin: "",
  },
  checkGeofrenceAction: () => {},
  setCheckGeofrence: () => {},
  setVehicle: () => {},
  vehicle: {
    location: {
      northeast: {
        lat: 0,
        lng: 0,
      },
      southwest: {
        lat: 0,
        lng: 0,
      },
    },
    vin: "",
    zone: "",
  },
});

const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [vehicle, setVehicle] = useState<ICreateVehicle>({
    location: {
      northeast: {
        lat: 0,
        lng: 0,
      },
      southwest: {
        lat: 0,
        lng: 0,
      },
    },
    vin: "",
    zone: "",
  });

  const [checkGeofrence, setCheckGeofrence] = useState<ICheckGeofrence>({
    latitude: "",
    longitude: "",
    vehicle_id: "",
    vin: "",
  });

  const addGeofrence = (data: ICreateVehicle) => {};
  const checkGeofrenceAction = (data: ICheckGeofrence) => {};
  return (
    <VehicleContext.Provider
      value={{
        vehicle,
        setVehicle,
        addGeofrence,
        checkGeofrenceAction,
        checkGeofrence,
        setCheckGeofrence,
      }}
    ></VehicleContext.Provider>
  );
};

export default VehicleProvider;
