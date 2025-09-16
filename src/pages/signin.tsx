import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "@/contexts/currentUserContext";
import { signIn } from "@/auth/auth";
import { User, getAuth } from "firebase/auth";
import axios from "axios";


const SignInPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const authHeaders: Record<string, string> = {}

    const auth = getAuth();
    const { currentUser } = auth; 

    const handleSignIn = async () => {
        const userCredential = await signIn({email: "s.taiki0301@gmail.com", password: "0301taiki"});
        const { user } = userCredential;
        setUser(user);
        console.log(user);
    }

    const contextTest = useContext(CurrentUserContext)
    const handleGetCurrentUser = async () => {
        console.log('context test', contextTest)
        const idToken = await currentUser?.getIdToken();
        console.log("idToken", idToken);
    }

    useEffect(() => {
        if (user) {
            console.log("User signed in:", user);
        }
    }, [user]);
    
    const getUser = async () => {
      if (currentUser) {
        authHeaders['X-Auth-Token'] = await currentUser.getIdToken()
      }

      try {
        const result = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/login`,
          {}, // request body (empty object if not needed)
          {
            withCredentials: true,
            headers: authHeaders,
          }
        );

        console.log(result);

      } catch(e) {
        console.error(e)
      }
    };

    return ( 
      <>
        <div className="App p-50">
            <div>Search User</div>
            <div>Sign In</div>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleGetCurrentUser}>Get Current User</button>
            <button onClick={getUser}>getUser</button>
        </div>
      </>
    )
}

export default SignInPage;