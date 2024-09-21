import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { USER_TYPE } from "../types/user.type";

import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";
import SearchBox from "../components/SearchBox";
import FriendBox from "../components/FriendBox";

const ChatPage = () => {
  const friends = useSelector<RootState, USER_TYPE[]>(
    (state) => state.users.friends
  );

  const [searchValue, setSearchValue] = useState<string>("");
  const [friendList, setFriendList] = useState<USER_TYPE[]>(friends);

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
          <ToggleTheme />
          <DrawerBtn />
        </div>
      </div>
      <div className="mt-10 w-full h-[calc(100vh-150px)] flex gap-x-5">
        <div className="hidden lg:flex w-[30%] min-w-[420px] flex-col gap-y-10">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="w-full max-h-full overflow-y-auto flex flex-col gap-y-5 p-6">
            {friendList?.map((friend: USER_TYPE) => {
              const a = [0, 1, 2, 3];
              const randomIndex = Math.floor(Math.random() * a.length);
              const randomValue = a[randomIndex];

              return (
                <FriendBox
                  key={uuidv4()}
                  user={friend}
                  messageCount={randomValue}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[70%]">Right</div>
      </div>
    </div>
  );
};

export default ChatPage;
