// import { toast } from "@/hooks/use-toast";
// import { logoutUser } from "@/services/auth";
// import { apiClient } from "@/services/base";
// import { redirect } from "react-router-dom";

// export const interceptAuthError = () => {
//   apiClient.interceptors.response.use(
//     (response: any) => response,
//     async (error: any) => {
//       if (error.response && error.response.status === 401) {
//         await logoutUser();
//         redirect("/login");

//         toast({
//           description: "Login Expires. Please login again to get access",
//         });
//       }

//       return Promise.reject(error);
//     }
//   );
// };
