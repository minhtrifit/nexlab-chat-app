import { v4 as uuidv4 } from "uuid";
import { USER_TYPE } from "../types/user.type";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateIsOpenFriendDrawer } from "../redux/actions/users.action";

import { IoMdClose } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

import FriendBox from "./FriendBox";
import SearchBox from "./SearchBox";

interface PropType {
  friends: USER_TYPE[];
  handleTargetChat: (user: USER_TYPE) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const FriendDrawer = (props: PropType) => {
  const { friends, handleTargetChat, searchValue, setSearchValue } = props;

  const dispath = useDispatch();

  const isOpenFriendDrawer = useSelector<RootState, boolean>(
    (state) => state.users.isOpenFriendDrawer
  );

  const toggleDrawer = () => {
    dispath(updateIsOpenFriendDrawer(!isOpenFriendDrawer));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpenFriendDrawer ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      <div
        className={`fixed top-0 left-0 w-[100%] sm:w-[80%] h-full overflow-y-auto text-gray-600 dark:text-white
                    bg-light-gray dark:bg-primary-gray shadow-lg z-50 transform transition-transform duration-300 ${
                      isOpenFriendDrawer ? "translate-x-0" : "-translate-x-full"
                    }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-2 p-2 focus:outline-none"
        >
          <IoMdClose size={25} />
        </button>
        <div
          className="w-full h-full text-gray-600 dark:text-white bg-light-gray dark:bg-secondary-gray
                  flex flex-col items-center pt-[50px]"
        >
          <div className="mt-5 w-[90%] flex flex-col gap-y-5">
            <div className="w-full flex items-center gap-5">
              <FaUserFriends size={30} />
              <h1 className="text-2xl font-bold">Friend List</h1>
            </div>
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div
            className="mt-5 w-full h-full py-4
                        overflow-y-auto flex flex-col items-center gap-y-5"
          >
            {friends?.map((friend: USER_TYPE) => {
              return (
                <div
                  key={uuidv4()}
                  className="w-[85%]"
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
      </div>
    </>
  );
};

export default FriendDrawer;
