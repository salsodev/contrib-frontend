import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BadgeHelp,
  BarChart3,
  HandCoins,
  Home,
  Mail,
  Megaphone,
  MessageCircleDashedIcon,
  MessageCircleMore,
  PersonStanding,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import SidebarHead from "./sidebarHeader";

const menu = [
  {
    path: "/dashboard",
    title: "Overview",
    icon: Home,
  },
  {
    path: "/dashboard/inbox",
    title: "My inbox",
    icon: Mail,
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
    path: "/dashboard/transactions",
    title: "Transactions",
    icon: BarChart3,
  },
  {
    path: "/dashboard/settings",
    title: "Settings",
    icon: Settings,
  },
];

const supportMenu = [
  {
    path: "/dashboard/help",
    title: "Help",
    icon: BadgeHelp,
  },
  {
    path: "/dashboard/report",
    title: "Report",
    icon: Megaphone,
  },
];

const chatMenu = [
  {
    path: "/dashboard/chat/group",
    title: "Group chat",
    icon: MessageCircleMore,
  },
  {
    path: "/dashboard/chat/private",
    title: "Private chat",
    icon: MessageCircleDashedIcon,
  },
];

function DashboardSidebar() {
  return (
    <aside>
      <Sidebar collapsible="icon">
        <SidebarHead />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menu.map((item) => (
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
          {/* Second Group */}
          <SidebarGroup>
            <SidebarGroupLabel>Chats</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {chatMenu.map((item) => (
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
          {/* Third Group */}
          <SidebarGroup>
            <SidebarGroupLabel>Support</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {supportMenu.map((item) => (
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
    </aside>
  );
}
export default DashboardSidebar;
