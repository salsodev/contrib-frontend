import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { addDays } from "date-fns";
import { ArrowLeft, ArrowRight, CalendarDaysIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

function Overview() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 2),
  });

  console.log(date);
  return (
    <section>
      <div className="flex items-stretch gap-5">
        <Card className="bg-white w-80 dark:bg-black border-none flex-auto">
          <CardHeader className="pt-3 px-3 pb-0">
            <div className="flex items-center justify-between gap-5 mb-1">
              <CardTitle className="text-sm">Overview</CardTitle>
              <p className="text-gray-400 text-sm">June 2024</p>
            </div>
            <Separator className="bg-[#111313] h-[2px]" />
          </CardHeader>
          <CardContent className="px-3">
            <div className="flex gap-3 items-center justify-between pt-3 mb-3">
              <div className="flex flex-col gap-1 items-center">
                <p className="text-2xl font-semibold">40</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Transactions
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="text-2xl font-semibold">14</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Income
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="text-2xl font-semibold">16</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Outcome
                </p>
              </div>
            </div>
            <Separator className="bg-[#111313] h-[2px]" />
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              initialFocus
              className="bg-slate-100 dark:bg-black"
            />
          </CardContent>
        </Card>

        {/* Second card */}
        <Card className="bg-white w-80 dark:bg-black border-none flex-auto">
          <CardHeader className="pt-3 px-3 pb-0">
            <div className="flex items-center justify-between gap-5 mb-1">
              <CardTitle className="text-sm">Your Balance</CardTitle>
              <p className="text-gray-400 text-sm">Naira</p>
            </div>
            <Separator className="bg-[#111313] h-[2px]" />
          </CardHeader>
          <CardContent className="px-3">
            <div className="flex gap-3 items-center justify-between pt-3 mb-3">
              <div className="flex flex-col gap-1 w-full">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Balance
                </p>
                <div className="flex justify-between items-center gap-5 w-full">
                  <p className="text-2xl font-semibold">$4,892.90</p>
                  <CalendarDaysIcon className="text-cyan-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third card */}
        <Card className="bg-white w-80 dark:bg-black border-none flex-auto">
          <CardHeader className="pt-3 px-3 pb-0">
            <div className="flex items-center justify-between gap-5 mb-1">
              <CardTitle className="text-sm">Quick action</CardTitle>
              <p className="text-gray-400 text-sm">Manage</p>
            </div>
            <Separator className="bg-[#111313] h-[2px]" />
          </CardHeader>
          <CardContent className="px-3">
            <div className="flex flex-col gap-3 justify-between pt-3 mb-3">
              <Button className="flex gap-5 items-center justify-between w-full bg-[#111313] px-3 py-2 rounded-lg">
                <div className="flex gap-1 items-center">
                  <ArrowRight className="size-3 text-cyan-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Send money
                  </p>
                </div>

                <span className="px-2 py-1 rounded-md bg-black text-white text-xs font-bold">
                  N
                </span>
              </Button>
              <Button className="flex gap-5 items-center justify-between w-full bg-[#111313] px-3 py-2 rounded-lg">
                <div className="flex gap-1 items-center">
                  <ArrowLeft className="size-3 text-orange-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Request money
                  </p>
                </div>

                <span className="px-2 py-1 rounded-md bg-black text-white text-xs font-bold">
                  R
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
export default Overview;
