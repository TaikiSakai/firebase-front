import { ReactNode } from "react";
import CurrentUserContext from "@/contexts/currentUserContext";
import useAuthEffect from "@/auth/hooks";

import { User } from "@/types";


const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const user = useAuthEffect();

  const currentUser: User = {
    id: 0,
    user_name: user?.displayName ?? '',
    email: user?.email ?? '',
    role: ''
  };


  return (
    <CurrentUserContext.Provider value={{user: currentUser}}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
