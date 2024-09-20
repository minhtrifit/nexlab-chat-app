import Drawer from "../components/Drawer";

const ChatPage = () => {
  return (
    <div className="w-full sm:w-[calc(100%-250px)] max-h-full p-6 overflow-y-auto text-black dark:text-white dark:bg-secondary-gray">
      <Drawer />
    </div>
  );
};

export default ChatPage;
