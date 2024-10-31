import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { useAuth } from "@/contexts/auth";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import { BellRing } from "lucide-react";
// import { useEffect } from "react";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import userImage from "./../assets/user1.jpg";
import { ThemeToggle } from "@/components/custom/theme-toggle";

function Dashboard() {
  const loaderData: any = useLoaderData();
  // const { setAuth } = useAuth();
  const url = window.location.pathname;
  // !loaderData?.isSuccess;
  if (false) {
    return <Navigate to={`/login?redirectTo=${url}`} />;
  }

  // useEffect(() => {
  //   setAuth({
  //     currentUser: loaderData?.data,
  //     isLoggedIn: loaderData.isSuccess,
  //   });
  // }, []);

  return (
    <SidebarProvider className="overflow-hidden">
      <DashboardSidebar />
      <SidebarInset className="bg-sky-50 dark:bg-[#111313]">
        <header className="flex flex-col border-white bg-white dark:bg-black text-white">
          <nav className="flex justify-between items-center w-full px-5 py-3">
            <div>
              <SidebarTrigger className="text-black dark:text-white" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center gap-5 p-2 bg-slate-100 dark:bg-[#111313] rounded-full">
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-center p-2 bg-[#111313] rounded-full">
                <BellRing />
              </div>
              <div className=" flex items-center justify-center w-12 h-12 rounded-full text-white overflow-hidden">
                <img src={userImage} alt="profile" />
              </div>
            </div>
          </nav>
        </header>
        <div className="px-5 pt-5 overflow-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
export default Dashboard;
