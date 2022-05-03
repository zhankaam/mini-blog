import { UserType } from './../provider/index';
import { createContext } from "react";

export const AuthContext = createContext({
  isLoading: false,
  user:
    {
      createdAt: "",
      deletedAt: null,
      email: "",
      firstName: "",
      id: 0,
      lastName: "",
      photo: null,
      provider: "",
      role: { id: 0, name: "", __entity: "" },
      socialId: null,
      status: { id: 0, name: "", __entity: "" },
      updatedAt: "",
      __entity: "",
    },
  token: null,
  setUser: (user: UserType) => {},
  setTokenData: (tokenData: string) => {},
  logout: () => {},
});
