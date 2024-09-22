import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { USER_TYPE } from "../types/user.type";

import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";
import NotificationBtn from "../components/NotificationBtn";
import SearchBox from "../components/SearchBox";

import { IoChatbubblesSharp, IoPersonAdd } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const HomePage = () => {
  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div
      className="w-full sm:w-[calc(100%-250px)] h-full p-6 overflow-hidden
                  text-black dark:text-white bg-gray-100 dark:bg-secondary-gray"
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
      <div className="mt-5 w-full flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">
          Welcome back: {currentUser?.name}
        </h1>
        <span className="flex items-center gap-x-1">
          You have <p className="text-sky-500">2 unread</p> notifications
        </span>
      </div>
      <div className="mt-5 w-full flex flex-wrap items-center justify-between">
        <div className="w-[100%] w-[400px]">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-light-gray dark:bg-primary-gray">
            <MdDateRange size={25} />
            Date
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-light-gray dark:bg-primary-gray">
            <IoPersonAdd size={20} />
            Add Friend
          </button>
        </div>
      </div>
      <div className="mt-8 w-full h-[calc(100vh-300px)] overflow-y-auto">
        <div className="h-[1000px]">Content</div>
      </div>
    </div>
  );
};

export default HomePage;
