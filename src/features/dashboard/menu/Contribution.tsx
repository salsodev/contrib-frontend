import { useMemo } from "react";
import DataTable from "../components/table/DataTable";
import { ContributionType } from "../models/table";
import { contributionColumns } from "../components/table/columns";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function Contribution() {
  const data = useMemo<ContributionType[]>(
    () => [
      {
        amount: 8349,
        contributionDate: new Date(),
        expectAmount: 23232,
        id: "wehjkdanafsdbm",
        lastUpdate: new Date(),
        notes: "no note",
        status: "complete",
        updateCount: 32,
        user: {
          firstName: "Sodiq",
          lastName: "Salaudeen",
        },
      },
      {
        amount: 32,
        contributionDate: new Date(),
        expectAmount: 23232,
        id: "8asjdbkjsd32",
        lastUpdate: new Date(),
        notes: "no note",
        status: "pending",
        updateCount: 12,
        user: {
          firstName: "John",
          lastName: "Doe",
        },
      },
      {
        amount: 23232,
        contributionDate: new Date(),
        expectAmount: 23232,
        id: "ajkdk20932b34",
        lastUpdate: new Date(),
        notes: "no note",
        status: "complete",
        updateCount: 3,
        user: {
          firstName: "Jane",
          lastName: "Doe",
        },
      },
      {
        amount: 8978,
        contributionDate: new Date(),
        expectAmount: 23232,
        id: "0929jhgjh788k",
        lastUpdate: new Date(),
        notes: "Still thinking about it",
        status: "not paid",
        updateCount: 4,
        user: {
          firstName: "Sodiq",
          lastName: "Folajin",
        },
      },
    ],
    []
  );

  const todaysDate = new Date().toLocaleDateString();

  return (
    <section className="w-full">
      <div className="flex justify-between items-start gap-5 w-full mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Thrift Management</h2>
          <p className="text-gray-400 text-sm">
            Handle your team's contributions in one place
          </p>
        </div>
        <Button className="flex items-center gap-1 bg-sky-700 text-white hover:bg-sky-600 rounded-lg">
          <PlusIcon className="size-4" />
          Add contribution
        </Button>
      </div>
      {/* <div className="flex items-center gap-5 mb-7">
        <div className="flex flex-col items-center justify-center rounded-lg bg-card text-card-foreground w-24 h-24 shadow-md"></div>
        <div className="flex flex-col items-center justify-center rounded-lg bg-card text-card-foreground w-24 h-24 shadow-md">
          {todaysDate}
        </div>
      </div> */}
      <div className="mb-20">
        <DataTable columns={contributionColumns} data={data} />
      </div>
    </section>
  );
}
export default Contribution;
