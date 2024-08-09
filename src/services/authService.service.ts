import axios from "axios";
import { ILoginUser, ISignupUser, IUser, IVerifyEmail } from "../types/auth";

// axios.defaults.headers.common["Authorization"] = "Bearer YOUR_TOKEN_HERE";
axios.defaults.headers.common["source_code"] =
  "c085645f276fd835042d3730d6a8fc99f6a3f0e8dd3d3ee73f61bbe9db425f13";

//@ts-ignore
axios.defaults.baseURL = `${import.meta.env.VITE_HOST}`;

export const useLogin = async (userData: ILoginUser) => {
  const formData = new FormData();
  formData.append("email", userData.email);
  formData.append("password", userData.password);

  try {
    const response = await axios.post("/user/login", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const useLogout = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("first");
      const response = await axios.get("/user/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      localStorage.removeItem("token");
      return response;
    } else {
      return new Error("No Token Found");
    }
  } catch (error: any) {
    return error.errors;
  }
};

export const useSignup = async (user: ISignupUser) => {
  const formData = new FormData();
  formData.append("firstName", user.firstName);
  formData.append("middleName", user.middleName);
  formData.append("lastName", user.lastName);
  formData.append("phone", user.phone);
  formData.append("email", user.email);
  formData.append("password", user.password);
  formData.append("password_confirmation", user.password_confirmation);

  try {
    console.log("wo");
    const response = await axios.post("/user/register", formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.errors;
  }
};

export const verifyEmail = async (data: IVerifyEmail) => {
  try {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("otp", data.otp);
    const response = await axios.post("/user/verify/email", formData);
    return response;
  } catch (error) {
    return error;
  }
};

export const regenrateOtp = async (email: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/user/regenerate/otp", formData);
    return response;
  } catch (error) {
    return error;
  }
};
