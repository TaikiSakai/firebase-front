import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "@/pages/signin";
import LoginPage from "@/pages/auth/login";
import App from "@/pages/App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignInPage />} path="signin" />
        <Route element={<LoginPage />} path="login" />
        <Route element={<App />} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
