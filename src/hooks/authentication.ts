import { useContext } from "react";
import { AuthContext } from "../contexts/authContex";
import { regenrateOtp, verifyEmail } from "../services/authService.service";
import { IVerifyEmail } from "../types/auth";
import { AxiosResponse } from "axios";

export const useAuth = () => {
  const authContex = useContext(AuthContext);
  return authContex;
};

export const useVerifyEmail = async (data: IVerifyEmail) => {
  try {
    const verifyEmailCont: AxiosResponse = await verifyEmail(data);
    return verifyEmailCont;
  } catch (error) {
    return error;
  }
};

export const useRegenrateOtp = async (email: string) => {
  try {
    const regenrate: AxiosResponse = await regenrateOtp(email);
    return regenrate;
  } catch (error) {
    return error;
  }
};
