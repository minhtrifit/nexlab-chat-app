import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";

const ChatPage = () => {
  return (
    <div className="w-full sm:w-[calc(100%-250px)] max-h-full p-6 overflow-y-auto text-black dark:text-white dark:bg-secondary-gray">
      <div className="w-full flex items-center justify-between">
        <div>
          <span className="text-2xl text-gray-600 dark:text-sky-500 font-bold">
            Chat
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          <DrawerBtn />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
