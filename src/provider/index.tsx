import { AuthContext } from "../context/index";
import { useCallback, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import api from "../api/index";

export type UserType = {
  createdAt: string;
  deletedAt: null;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  photo: null;
  provider: string;
  role: { id: number; name: string; __entity: string };
  socialId: null;
  status: { id: number; name: string; __entity: string };
  updatedAt: string;
  __entity: string;
};

export type AuthContextType = {
  isLoading: boolean;
  user: UserType;
  token: null;
  setUser: (user: UserType) => void;
  setTokenData: (tokenData: string) => void;
  logout: () => void;
};

export const AuthProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setTokenData = useCallback((tokenData: string) => {
    setToken(tokenData);

    if (tokenData) {
      Cookies.set("auth-token", tokenData);
    } else {
      Cookies.remove("auth-token");
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
  }, []); // setTokenData

  const fetchData = useCallback(async () => {
    const tokenData = Cookies.get("auth-token");
    setTokenData(tokenData || '');

    try {
      if (tokenData) {
        const { data } = await api.auth.getProfile();
        setUser(data);
      }
    } catch {
      setToken(null);
    } finally {
      setIsLoading(true);
    }
  }, [setTokenData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const contextValue = useMemo(
    () => ({
      isLoading,
      user,
      token,
      setUser,
      setTokenData,
      logout,
    }),
    [isLoading, user, token, setTokenData, logout]
  );

  return (
    <AuthContext.Provider value={contextValue as AuthContextType}>
      {props.children}
    </AuthContext.Provider>
  );
};
