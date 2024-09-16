import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../helpers/declarations";
import { useNavigate } from "react-router";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (
    email: string,
    userName: string,
    password: string,
    role: string
  ) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => void;
};
type Props = { children: React.ReactNode };
const AuthContext = createContext<UserContextType>({} as UserContextType);
export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
    }
    setIsReady(true);
  }, []);
};
