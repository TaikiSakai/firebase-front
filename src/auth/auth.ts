import { getAuth, signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";

type LoginRequest = {
  email: string;
  password: string;
}

const signIn = async (props: LoginRequest): Promise<UserCredential> => {
  try{
    const userCredential = await signInWithEmailAndPassword(auth, props.email, props.password);
    return userCredential;
  }
  catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

const getUserToken = async (props: LoginRequest): Promise<UserCredential> => {
  try{
    const userCredential = await signInWithEmailAndPassword(auth, props.email, props.password);
    return userCredential;
  }
  catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

const disableUserToken = async () => {
  try{
    const auth = getAuth();
    await signOut(auth);
    console.log('logout success');
  } catch(e) {
    console.error(e);
  }
};

export { signIn, getUserToken, disableUserToken };

