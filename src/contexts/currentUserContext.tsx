import { createContext } from "react";

import { User } from "@/types";

type CurrentUserContextType = {
  user: User | null
};

const CurrentUserContext = createContext<CurrentUserContextType>({
  user: {
    id: 0,
    user_name: '',
    email: '',
    role: '',
  }
});

export default CurrentUserContext;