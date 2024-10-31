import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export interface MessageInboxProps {
  message: {
    title: string;
    date: string;
    description: string;
    content: string;
  };
}

function InboxView({ message }: MessageInboxProps) {
  return (
    <div>
      <Card className="border-none px-5 py-4 shadow-none">
        <CardHeader className="p-0 mb-2">
          <div className="flex items-center justify-between gap-5">
            <CardTitle className="text-black dark:text-white">
              {message.title}
            </CardTitle>
            <p className="text-sm text-black dark:text-white">{message.date}</p>
          </div>
          <CardDescription className="text-black dark:text-white">
            {message.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 text-gray-600 dark:text-gray-400 text-sm">
          {message.content}
        </CardContent>
      </Card>
    </div>
  );
}
export default InboxView;
