import MessageInbox from "../components/inbox";
import InboxView from "../components/inboxView";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    id: 1,
    title: "John Doe",
    date: "over 1 year ago",
    description: "Meeting Tomorrow",
    content:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    read: false,
  },
  {
    id: 2,
    title: "Alice Smith",
    date: "over 1 year ago",
    description: "Re: Project Update",
    content:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\nI have a few minor suggestions that I'll include in the attached document.\nLet's discuss these during our next meeting. Keep up the excellent work!\nBest regards, Alice",
    read: false,
  },
  {
    id: 3,
    title: "Bob Johnson",
    date: "over 1 year ago",
    description: "Weekend Plans",
    content:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\nLooking forward to your response!\nBest, Bob",
  },
  {
    id: 4,
    title: "Emily Davis",
    date: "over 1 year ago",
    description: "Re: Question about Budget",
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\nThanks, Emily",
  },
  {
    id: 5,
    title: "Michael Wilson",
    date: "over 1 year ago",
    description: "Important Announcement",
    content:
      "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\nRegards, Michael",
  },
  {
    id: 6,
    title: "John Doe",
    date: "over 1 year ago",
    description: "Meeting Tomorrow",
    content:
      "Hi, let's have a meeting tomorrow to discuss the project. I've between reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
  },
  {
    id: 7,
    title: "Salaudeen Sodiq",
    date: "over 1 year ago",
    description: "Building Contrib.",
    content:
      "Hi, let's have a meeting tomorrow to discuss the project. I've between reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
  },
];

function Inbox() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white dark:bg-black px-3 pt-1 pb-5 rounded-lg">
      <Tabs defaultValue="all" className="overflow-hidden">
        <header className="flex items-center justify-between gap-5 mb-10">
          <h2 className="text-black dark:text-white">Inbox</h2>
          <div className="flex items-center gap-5 bg-slate-100 dark:bg-[#111313] px-1 py-[2px] rounded-md">
            {/* <Button className="text-black dark:text-white"></Button>
            <Button className="text-black dark:text-white">Unread</Button> */}
            <TabsList>
              <TabsTrigger value="all" className="text-black dark:text-white">
                All mails
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="text-black dark:text-white"
              >
                Unread
              </TabsTrigger>
            </TabsList>
          </div>
        </header>
        <ScrollArea className="h-screen">
          <TabsContent value="all" className="flex flex-col gap-4">
            {data.map((message) => (
              <MessageInbox
                title={message.title}
                date={message.date}
                content={message.content}
                description={message.description}
                key={message.id}
                selectedIndex={message.id}
                isActive={selected === message.id}
                onSelect={setSelected}
              />
            ))}
          </TabsContent>
          <TabsContent value="unread" className="flex flex-col gap-4">
            {data
              .filter((message) => message.read === false && message)
              .map((message) => (
                <MessageInbox
                  title={message.title}
                  date={message.date}
                  content={message.content}
                  description={message.description}
                  key={message.id}
                  selectedIndex={message.id}
                  isActive={selected === message.id}
                  onSelect={setSelected}
                />
              ))}
          </TabsContent>
        </ScrollArea>
      </Tabs>
      <section>
        <InboxView message={data[selected - 1]} />
      </section>
    </section>
  );
}
export default Inbox;
