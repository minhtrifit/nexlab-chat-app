import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CHAT_TYPE } from "../types/chat.type";
import { USER_TYPE } from "../types/user.type";

import { IoIosNotificationsOutline } from "react-icons/io";
import { getLastestChat } from "../utils/utils";

const NotificationBtn = () => {
  const chats = useSelector<RootState, CHAT_TYPE[]>(
    (state) => state.chats.chats
  );

  const friends = useSelector<RootState, USER_TYPE[]>(
    (state) => state.users.friends
  );

  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  const [isOpen, setIsOpen] = useState(false);
  const [notis, setNotis] = useState<{ user: USER_TYPE; chat: CHAT_TYPE }[]>(
    []
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const filterNotis: { user: USER_TYPE; chat: CHAT_TYPE }[] = [];

    for (let i = 0; i < friends?.length; ++i) {
      const friendId = friends[i]?.id;

      if (currentUser?.id && friendId) {
        const filterChats = getLastestChat(chats, currentUser?.id, friendId);

        if (filterChats[filterChats.length - 1]) {
          filterNotis.push({
            user: friends[i],
            chat: filterChats[filterChats.length - 1],
          });
        }
      }

      setNotis(filterNotis);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-[40px] h-[40px] flex items-center justify-center
                   focus:outline-none hover:text-zinc-500 dark:hover:text-zinc-400"
      >
        <IoIosNotificationsOutline size={30} />
      </button>
      <div
        className={`absolute right-[-160px] sm:right-0 mt-2 w-[350px] bg-white dark:bg-primary-gray
                    text-black dark:text-white rounded-md shadow-lg z-10
                    transition-transform duration-300 ease-in-out 
                    ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0 pointer-events-none"
                    }`}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(-8px)" }}
      >
        <div className="p-4">
          <h1 className="text-center font-bold text-md">Notifications</h1>
          <div className="mt-5 w-full max-h-[300px] overflow-y-auto flex flex-col gap-y-3">
            {notis?.map((noti: { user: USER_TYPE; chat: CHAT_TYPE }) => {
              return (
                <div
                  key={uuidv4()}
                  className="p-2 rounded-sm w-full flex items-center justify-start gap-x-3
                              hover:cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700"
                >
                  <div
                    className="w-[40px] h-[40px] bg-light-gray dark:bg-secondary-gray rounded-full
                                flex items-center justify-center"
                  >
                    {noti?.user?.name
                      ? noti?.user?.name.charAt(0)
                      : "undefined"}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-xs text-zinc-400">
                      {noti?.chat?.sendAt ? noti?.chat?.sendAt : "undefined"}
                    </span>
                    <span className="text-sm max-w-[200px] truncate">
                      {noti?.chat?.message ? noti?.chat?.message : "undefined"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBtn;
