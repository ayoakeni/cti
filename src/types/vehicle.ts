import { Dispatch } from "react";

export interface ICreateVehicle {
  location: {
    southwest: News;
    northeast: News;
  };
  vin: string;
  zone: string;
}
interface News {
  lng: number;
  lat: number;
}

export interface ICheckGeofrence {
  latitude: string;
  longitude: string;
  vehicle_id: string;
  vin: string;
}

export interface VehicleContextType {
  checkGeofrence: ICheckGeofrence;
  vehicle: ICreateVehicle;
  setVehicle: Dispatch<React.SetStateAction<ICreateVehicle>>;
  setCheckGeofrence: Dispatch<React.SetStateAction<ICheckGeofrence>>;
  addGeofrence: (vehicle: ICreateVehicle) => void;
  checkGeofrenceAction: (vehicle: ICheckGeofrence) => void;
}
