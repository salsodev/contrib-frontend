import LoginForm from "@/features/authentication/login/LoginForm";
import { Navigate, useLoaderData } from "react-router-dom";

function Login() {
  const loaderData: any = useLoaderData();

  if (loaderData?.isSuccess) {
    return <Navigate to="/dashboard" />;
  }

  return <LoginForm />;
}
export default Login;
