import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/resetPassword";
import CheckYourEmail from "./pages/auth/checkYourEmail";
import ConfirmResetPassword from "./pages/auth/confirmResetPassword";
import AuthProvider from "./contexts/authContex";
import ProtectedRoutes from "./security/protectedRoutes";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/auth/signup";
import VerifyEmail from "./pages/auth/verifyEmail";
import Vehicles from "./pages/vehicles/vehicles";
import NewVehicle from "./layouts/vehicles/newVehicle";
import NotFound from "./pages/not-found/notFound";
import FuelMonitoring from "./pages/fuel-monitoring/fuelMonitoring";
import VehicleTracking from "./pages/dashboard/vehicleTracking";
import Analysis from "./pages/analysis/analysis";
import TyreManagement from "./pages/tyreManagement/tyreManagement";
import AlertTable from "./pages/alert/alertTable";
import Maintainance from "./pages/maintainance/maintainance";
import VideoTelematics from "./pages/video-telematics/videoTelematics";
import Ecommerce from "./pages/ecommerce/ecommerce";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/confirm-password" element={<ConfirmResetPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicle-tracking" element={<VehicleTracking />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/create-vehicle" element={<NewVehicle />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/fuel-monitoring" element={<FuelMonitoring />} />
          <Route path="/tyre" element={<TyreManagement />} />
          <Route path="/alert" element={<AlertTable />} />
          <Route path="/maintainance" element={<Maintainance />} />
          <Route path="/video-telematics" element={<VideoTelematics />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
