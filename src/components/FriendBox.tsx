import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { USER_TYPE } from "../types/user.type";
import { formatDate, getLastestChat } from "../utils/utils";
import { CHAT_TYPE } from "../types/chat.type";
import { useEffect, useState } from "react";

interface PropType {
  user: USER_TYPE;
  messageCount: number;
}

const FriendBox = (props: PropType) => {
  const { user, messageCount } = props;

  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  const chats = useSelector<RootState, CHAT_TYPE[]>(
    (state) => state.chats.chats
  );

  const [lastestChat, setLastestChat] = useState<CHAT_TYPE | null>(null);

  useEffect(() => {
    if (currentUser?.id && user?.id) {
      const filterChats = getLastestChat(chats, currentUser?.id, user?.id);

      if (filterChats[filterChats.length - 1])
        setLastestChat(filterChats[filterChats.length - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-full shadow-md bg-white dark:bg-primary-gray p-4 rounded-sm flex items-center justify-between
                  transform transition duration-300 hover:scale-110"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center
                      bg-light-gray dark:bg-secondary-gray"
        >
          {user?.name ? user?.name.charAt(0) : "undefined"}
        </div>
        <div className="flex flex-col gap-1">
          <span>{user?.name}</span>
          <span className="max-w-[200px] truncate text-sm text-gray-500 dark:text-gray-400">
            {lastestChat?.message}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <span className="max-w-[100px] truncate text-sm text-gray-500 dark:text-gray-400">
          {lastestChat?.sendAt ? formatDate(lastestChat?.sendAt) : "undefined"}
        </span>
        {messageCount === 0 ? (
          <div className="w-[20px] h-[20px]" />
        ) : (
          <div className="w-[20px] h-[20px] bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {messageCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendBox;
