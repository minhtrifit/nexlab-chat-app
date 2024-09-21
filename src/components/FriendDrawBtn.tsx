import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateIsOpenFriendDrawer } from "../redux/actions/users.action";

import { FaUserFriends } from "react-icons/fa";

const FriendDrawerBtn = () => {
  const dispath = useDispatch();

  const isOpenFriendDrawer = useSelector<RootState, boolean>(
    (state) => state.users.isOpenFriendDrawer
  );

  const toggleDrawer = () => {
    dispath(updateIsOpenFriendDrawer(!isOpenFriendDrawer));
  };

  return (
    <button
      onClick={toggleDrawer}
      className="block lg:hidden w-[40px] h-[40px] p-2 border border-black dark:border-white rounded-md
              flex items-center justify-center focus:outline-none hover:bg-zinc-200 dark:hover:bg-primary-gray"
    >
      <FaUserFriends size={20} />
    </button>
  );
};

export default FriendDrawerBtn;
