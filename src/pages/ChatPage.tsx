import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { USER_TYPE } from "../types/user.type";
import { CHAT_TYPE } from "../types/chat.type";
import { getLastestChat } from "../utils/utils";

import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";
import SearchBox from "../components/SearchBox";
import FriendBox from "../components/FriendBox";
import ChatBox from "../components/ChatBox";
import NotificationBtn from "../components/NotificationBtn";

const ChatPage = () => {
  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  const friends = useSelector<RootState, USER_TYPE[]>(
    (state) => state.users.friends
  );

  const chats = useSelector<RootState, CHAT_TYPE[]>(
    (state) => state.chats.chats
  );

  const [searchValue, setSearchValue] = useState<string>("");
  const [friendList, setFriendList] = useState<USER_TYPE[]>(friends);
  const [targetChat, setTargetChat] = useState<{
    user: USER_TYPE | null;
    chats: CHAT_TYPE[];
  }>({ user: null, chats: [] });

  const handleTargetChat = (user: USER_TYPE) => {
    if (currentUser?.id && user?.id) {
      const filterChats = getLastestChat(chats, currentUser?.id, user?.id);
      setTargetChat({ user: user, chats: filterChats });
    }
  };

  useEffect(() => {
    if (searchValue !== "") {
      console.log("SEARCH VALUE:", searchValue);

      const filterList = friends?.filter((f: USER_TYPE) => {
        return f?.name?.toLocaleLowerCase()?.includes(searchValue);
      });

      setFriendList(filterList);
    } else setFriendList(friends);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    if (friends?.length > 1 && currentUser?.id && friends[0]?.id) {
      const filterChats = getLastestChat(
        chats,
        currentUser?.id,
        friends[0]?.id
      );
      setTargetChat({ user: friends[0], chats: filterChats });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friends]);

  return (
    <div
      className="w-full sm:w-[calc(100%-250px)] max-h-full p-6 overflow-hidden text-black dark:text-white
                  bg-gray-100 dark:bg-secondary-gray"
    >
      <div className="w-full h-[50px] flex items-center justify-between">
        <div>
          <span className="text-2xl text-gray-600 dark:text-sky-500 font-bold">
            Chat
          </span>
        </div>
        <div className="flex items-center gap-3">
          <NotificationBtn />
          <ToggleTheme />
          <DrawerBtn />
        </div>
      </div>
      <div className="mt-5 w-full h-[calc(100vh-150px)] flex gap-x-5">
        <div className="hidden lg:flex w-[30%] min-w-[420px] flex-col gap-y-5">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="w-full max-h-full overflow-y-auto flex flex-col gap-y-5 p-6">
            {friendList?.map((friend: USER_TYPE) => {
              return (
                <div
                  key={uuidv4()}
                  onClick={() => {
                    handleTargetChat(friend);
                  }}
                >
                  <FriendBox
                    user={friend}
                    messageCount={
                      friend?.messageCount ? friend?.messageCount : 0
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[100%] lg:w-[70%]">
          <ChatBox targetChat={targetChat} setTargetChat={setTargetChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
