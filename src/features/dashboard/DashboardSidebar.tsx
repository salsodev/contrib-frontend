import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HandCoins, Home, PersonStanding, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    path: "/dashboard",
    title: "Overview",
    icon: Home,
  },
  {
    path: "/dashboard/contributors",
    title: "Contributors",
    icon: PersonStanding,
  },
  {
    path: "/dashboard/contributions",
    title: "Contributions",
    icon: HandCoins,
  },
  {
    path: "/dashboard/settings",
    title: "Settings",
    icon: Settings,
  },
];

function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive>
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuAction />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
export default DashboardSidebar;
