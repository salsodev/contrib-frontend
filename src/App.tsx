import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AuthProvider from "./contexts/auth";
import { ThemeProvider } from "./contexts/theme";
// import { isSignedIn } from "./services/auth";

const queryClient = new QueryClient();

export async function checkIsLoggedInLoader() {
  return null;
  // try {
  //   const response: any = await isSignedIn();

  //   return response;
  // } catch (err: any) {
  //   if (err.code === "ERR_NETWORK") {
  //     throw new Response("Please check your internet connection and try again");
  //   }

  //   return err.response?.data;
  // }
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
