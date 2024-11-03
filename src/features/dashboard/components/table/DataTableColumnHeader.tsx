import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretSortIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue> {
  title: string;
  column: Column<TData, TValue>;
}

function DataTableColumnHeader<TData, TValue>({
  title,
  column,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return (
      <div className="px-2 rounded-md py-1 text-black bg-slate-200 dark:bg-slate-500 dark:text-white">
        {title}
      </div>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{title}</span>{" "}
          {column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          ) : (
            <CaretSortIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px] bg-popover text-popover-foreground border-border-color">
        <DropdownMenuItem
          className="cursor-pointer hover:bg-sidebar-accent flex items-center"
          onClick={() => column.toggleSorting(false)}
        >
          <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-sidebar-accent flex items-center"
          onClick={() => column.toggleSorting(true)}
        >
          <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer hover:bg-sidebar-accent flex items-center"
          onClick={() => column.toggleVisibility(false)}
        >
          <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DataTableColumnHeader;
