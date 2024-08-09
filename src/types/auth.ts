import { Dispatch } from "react";

interface ILoginUser {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  fName: string;
  lName: string;
  mName: string;
  phone: string;
  user_type: string;
  status: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

interface ISignupUser {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface AuthContextType {
  user: IUser;
  signupUser: ISignupUser;
  isAuthenticated: boolean;
  logout: () => void;
  setSignupUser: Dispatch<React.SetStateAction<ISignupUser>>;
  login: (user: ILoginUser) => void;
  signUp: (user: ISignupUser) => void;
}

interface IVerifyEmail {
  email: string;
  otp: string;
}

export { ILoginUser, IUser, ISignupUser, IVerifyEmail, AuthContextType };
