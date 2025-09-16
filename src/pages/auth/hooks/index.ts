import { getUserToken, disableUserToken } from "@/auth/auth";


type LoginParams = {
  email: string;
  password: string
};

const useAuthorize = () => {
  const handleLogin = async ({ email, password }: LoginParams) => {
    const userCredential = await getUserToken({ email, password });
    const { user } = userCredential;
    console.log('login success!', user);
  };


  const handleLogout = async () => {
    await disableUserToken();
  };

  return { handleLogin, handleLogout }
};

export default useAuthorize;