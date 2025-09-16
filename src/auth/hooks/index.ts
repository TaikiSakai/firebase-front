import { useEffect, useState } from "react";
import { getAuth, User } from "firebase/auth";


const useAuthEffect = (): User | null => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
        console.log('current user', auth.currentUser);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return currentUser;
};

export default useAuthEffect;
