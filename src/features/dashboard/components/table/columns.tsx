import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ContributionType } from "../../models/table";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import DataTableColumnHeader from "./DataTableColumnHeader";

const contributionColumnHelper = createColumnHelper<ContributionType>();

export const contributionColumns: ColumnDef<ContributionType, any>[] = [
  contributionColumnHelper.display({
    id: "Select",
    header: ({ table }) => (
      <div className="w-8">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-8">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="select row"
        />
      </div>
    ),
    enableHiding: false,
    enableSorting: false,
  }),
  contributionColumnHelper.accessor(
    (row) => `${row.user.firstName} ${row.user.lastName}`,
    {
      id: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
    }
  ),
  contributionColumnHelper.accessor("expectAmount", {
    id: "expectAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expected Amount" />
    ),
  }),
  contributionColumnHelper.accessor("amount", {
    id: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount paid" />
    ),
  }),
  contributionColumnHelper.accessor("status", {
    id: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  }),
  contributionColumnHelper.accessor("contributionDate", {
    id: "contributionDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Date" />
    ),
    cell: ({ getValue }) => format(getValue(), "PPPP"),
  }),
];
