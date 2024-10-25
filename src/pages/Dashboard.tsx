import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/auth";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import { useEffect } from "react";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";

function Dashboard() {
  const loaderData: any = useLoaderData();
  const { setAuth } = useAuth();
  const url = window.location.pathname;

  if (!loaderData?.isSuccess) {
    return <Navigate to={`/login?redirectTo=${url}`} />;
  }

  useEffect(() => {
    setAuth({
      currentUser: loaderData?.data,
      isLoggedIn: loaderData.isSuccess,
    });
  }, []);

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col gap-10">
        <header>
          <SidebarTrigger />
          <nav></nav>
        </header>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
export default Dashboard;
