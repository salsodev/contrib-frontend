import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import { TableBody, TableRow, TableCell, Table } from "@/components/ui/table";
import DataTableHeader from "./DataTableHeader";
import DataTableViewOptions from "./DataTableViewOption";
import DataTablePagination from "./DataTablePagination";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { LucideSearch } from "lucide-react";

interface DataTableProps<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
}

function DataTable<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-7">
          <div className="relative">
            <LucideSearch className="size-4 absolute left-2 top-2 text-gray-600" />
            <Input
              placeholder="Search by full name..."
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px] pl-9 py-2 pr-3 bg-sidebar-accent border border-gray-600 text-sm"
            />
          </div>
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <DataTableViewOptions table={table} />
      </div>
      <Table className="mt-6 mb-10">
        <DataTableHeader table={table} />
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-gray-400 dark:border-gray-600 hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell
                      key={cell.id}
                      className="last:text-right first:w-8"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No data to display
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
}
export default DataTable;
