import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

import { Ellipsis } from "lucide-react";

// interface DataTableRowActionProps<TData> {
//   row: Row<TData>;
// }

function DataTableRowAction() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <Ellipsis />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black text-white w-28 flex flex-col gap-[2px] items-start"
      >
        <DropdownMenuItem className="cursor-pointer hover:bg-[#111313] w-full px-3 py-2 flex">
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-[#111313] w-full px-3 py-2 flex">
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-slate-100 w-full " />
        <DropdownMenuItem className="cursor-pointer hover:bg-[#111313] w-full px-3 py-2 flex text-red-500">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DataTableRowAction;
