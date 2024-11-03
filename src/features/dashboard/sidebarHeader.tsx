import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Check } from "lucide-react";
import { useState } from "react";

const organizations = ["Acme Inc.", "Acme Corp.", "Speedit"];

function SidebarHead() {
  const [selectedOrganization, setSelectedOrganization] = useState("Speedit");

  let compIcon = "";
  let orgToArr = selectedOrganization.split(" ");

  if (orgToArr.length === 1) {
    compIcon =
      selectedOrganization[0].toUpperCase() +
      selectedOrganization[selectedOrganization.length - 1].toUpperCase();
  } else if (orgToArr.length > 1) {
    const firstchar = orgToArr[0][0];
    const lastWord = orgToArr[orgToArr.length - 1];
    const notDot = lastWord[lastWord.length - 1] !== ".";
    const lastChar = notDot
      ? lastWord[lastWord.length - 1]
      : lastWord[lastWord.length - 2];

    compIcon = firstchar.toUpperCase() + lastChar.toUpperCase();
  }

  return (
    <SidebarHeader className="mb-5">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground py-6"
              >
                <span className="flex aspect-square justify-center items-center bg-green-500 text-white text-xs rounded-md p-[2px] w-6 h-6">
                  {compIcon}
                </span>
                {selectedOrganization}
                <CaretSortIcon className="ml-auto h-4 w-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[--radix-dropdown-menu-trigger-width]"
            >
              {organizations.map((org) => (
                <DropdownMenuItem
                  key={org}
                  onSelect={() => setSelectedOrganization(org)}
                >
                  <span>{org}</span>
                  {org === selectedOrganization && (
                    <Check className="size-3 ml-auto" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
export default SidebarHead;
