import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";
import NotificationBtn from "../components/NotificationBtn";

import { IoChatbubblesSharp } from "react-icons/io5";

const HomePage = () => {
  return (
    <div
      className="w-full sm:w-[calc(100%-250px)] max-h-full p-6 overflow-y-auto text-black dark:text-white
                  bg-gray-100 dark:bg-secondary-gray"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <IoChatbubblesSharp size={40} />
          <span className="hidden sm:block text-xl text-gray-600 dark:text-sky-500 font-bold">
            Chat Application
          </span>
        </div>
        <div className="flex items-center gap-3">
          <NotificationBtn />
          <ToggleTheme />
          <DrawerBtn />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
