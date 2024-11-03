import { BellRing, CheckCircle, ListFilterIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function Notification() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          className="flex items-center justify-center p-2 border-none shadow-none"
        >
          <BellRing className="size-5" />
          <span className="sr-only">Notification button</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-popover text-popover-foreground border-border-color rounded-xl w-80"
        align="end"
      >
        <div className="flex items-center justify-between gap-5 mb-5">
          <h2 className="font-semibold">Alerts</h2>
          <div className="flex items-center gap-4">
            <ListFilterIcon className="size-4 cursor-pointer" />
            <CheckCircle className="size-4 cursor-pointer" />
          </div>
        </div>
        <div className="bg-sidebar-accent px-4 py-3 text-sm flex items-center">
          <p>Alerts about your contributions and account will show here</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default Notification;
