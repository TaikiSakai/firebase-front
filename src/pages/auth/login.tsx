import { useState } from "react";

import useAuthorize from "@/pages/auth/hooks";


const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { handleLogin } = useAuthorize();

  const onSubmit = () => {
    handleLogin({email, password});
  };

  return (
    <>
      <div className="max-w-md rounded overflow-hidden shadow-lg p-30">
        <div className="p-2">Login</div>
        <div className="flex flex-col gap-2">
          <input
            className="outline p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="outline p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="rounded" onClick={onSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
  )
};

export default LoginPage;
