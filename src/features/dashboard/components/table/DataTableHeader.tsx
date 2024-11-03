import { TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

function DataTableHeader<TData>({ table }: { table: Table<TData> }) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow
          key={headerGroup.id}
          className="border-none rounded-lg bg-sky-800"
        >
          {headerGroup.headers.map((header) => {
            return (
              <TableHead colSpan={header.colSpan} key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}
export default DataTableHeader;
