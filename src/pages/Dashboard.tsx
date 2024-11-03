import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { useAuth } from "@/contexts/auth";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
// import { useEffect } from "react";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import Notification from "@/components/custom/notification";
import UserProfile from "@/components/custom/user-profile";

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
      <SidebarInset className="bg-dashboard-background text-background-foreground">
        <header className="flex flex-col bg-dashboard-background-header">
          <nav className="flex justify-between items-center w-full px-5 py-3">
            <div>
              <SidebarTrigger />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center bg-sidebar-accent text-sidebar-accent-foreground rounded-full">
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-center cursor-pointer bg-sidebar-accent text-sidebar-accent-foreground rounded-full">
                <Notification />
              </div>
              <div className=" flex items-center justify-center w-12 h-12 rounded-full text-white overflow-hidden">
                <UserProfile />
              </div>
            </div>
          </nav>
        </header>
        <div className="px-5 pt-5 overflow-x-scroll">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
export default Dashboard;
