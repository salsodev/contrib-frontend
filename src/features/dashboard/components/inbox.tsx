import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MessageInboxProps {
  title: string;
  date: string;
  description: string;
  content: string;
  selectedIndex: number;
  isActive: boolean;
  onSelect: React.Dispatch<React.SetStateAction<number>>;
}

function MessageInbox(props: MessageInboxProps) {
  return (
    <Card
      className={`${
        !props.isActive && "dark:hover:bg-neutral-700 hover:bg-slate-100"
      } px-5 py-4 cursor-pointer border dark:border-neutral-700 border-slate-300 ${
        props.isActive && "dark:bg-neutral-700 bg-slate-100"
      }`}
      onClick={() => props.onSelect(props.selectedIndex)}
    >
      <CardHeader className="p-0 mb-2">
        <div className="flex items-center justify-between gap-5">
          <CardTitle
            className={`text-black hover:text-black dark:text-white ${
              props.isActive && "dark:text-white text-black"
            }`}
          >
            {props.title}
          </CardTitle>
          <p className="text-sm text-black dark:text-white">{props.date}</p>
        </div>
        <CardDescription className="text-black dark:text-white">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 text-gray-400 text-sm">
        {props.content.slice(0, 150) + "..."}
      </CardContent>
    </Card>
  );
}
export default MessageInbox;
