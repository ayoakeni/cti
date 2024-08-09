import React, { createContext, ReactNode, useState } from "react";
import { AuthContextType, ILoginUser, ISignupUser, IUser } from "../types/auth";
import {
  useLogin,
  useLogout,
  useSignup,
} from "../services/authService.service";
import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext<AuthContextType>({
  login: async () => {}, // Placeholder for the login function
  signUp: async () => {}, // Placeholder for the login function
  user: {
    created_at: "",
    email: "",
    email_verified_at: "",
    fName: "",
    id: 0,
    lName: "",
    mName: "",
    phone: "",
    status: "",
    updated_at: "",
    user_type: "",
  },
  isAuthenticated: false,
  logout: async () => {},
  setSignupUser: () => {},
  signupUser: {
    email: "",
    firstName: "",
    lastName: "",
    middleName: "",
    password: "",
    password_confirmation: "",
    phone: "",
  },
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signupUser, setSignupUser] = useState<ISignupUser>({
    email: "",
    firstName: "",
    lastName: "",
    middleName: "",
    password: "",
    password_confirmation: "",
    phone: "",
  });
  const [user, setUser] = useState<IUser>({
    created_at: "",
    email: "",
    email_verified_at: "",
    fName: "",
    id: 0,
    lName: "",
    mName: "",
    phone: "",
    status: "",
    updated_at: "",
    user_type: "",
  });

  const loginHandler = async (userData: ILoginUser) => {
    try {
      const data = await useLogin(userData);
      console.log(data.message);
      if (data.token) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("fName", data.user.first_name);
        setIsAuthenticated(true);
        return data.message;
      } else {
        // toast({
        //   title: "Login Failed",
        //   status: "error",
        //   duration: 2000,
        //   description: data.message,
        //   isClosable: true,
        //   position: "top-right",
        // });
        console.error("Failed to login:", data);
        return data.message;
      }
    } catch (error: any) {
      // toast({
      //   title: "Login Failure",
      //   status: "error",
      //   duration: 2000,
      //   description: "Internal Server Error",
      //   isClosable: true,
      //   position: "top-right",
      // });
      console.error("Failed to login:", error);
      return "Internal Server Error";
    }
  };

  const logoutHandler = async () => {
    try {
      const response = await useLogout();
      localStorage.removeItem("token");
    } catch (error: any) {
      toast({
        title: error?.errors || "An Error Occured",
        status: "error",
        duration: 2000,
        description: error.errors,
        isClosable: true,
        position: "top-right",
      });
      console.error("Failed to Logout:", error);
    }
  };

  const signupHandler = async (userData: ISignupUser) => {
    try {
      const response = await useSignup(userData);
      console.log(response.message);
      if (response?.token) {
        setUser(response.user);
        localStorage.setItem("token", response?.token);
        localStorage.setItem("fName", response?.user.fName);
        setIsAuthenticated(true);
        toast({
          title: "Account Created",
          status: "success",
          duration: 2000,
          description: response.message,
          isClosable: true,
          position: "top-right",
        });
        return true;
      } else {
        toast({
          title: response.errors,
          status: "error",
          duration: 2000,
          description: response.errors,
          isClosable: true,
          position: "top-right",
        });
        console.error("Failed to Sign Up:", response);
        return false;
      }
    } catch (error: any) {
      toast({
        title: "Sign Up Failure",
        status: "error",
        duration: 2000,
        description: error.email
          ? "Email Already Exists"
          : "Internal Server Error",
        isClosable: true,
        position: "top-right",
      });
      console.log(error.email);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        logout: logoutHandler,
        signUp: signupHandler,
        setSignupUser,
        signupUser,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
