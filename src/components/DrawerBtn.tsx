import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateIsOpenDrawer } from "../redux/actions/users.action";

import { VscThreeBars } from "react-icons/vsc";

const DrawerBtn = () => {
  const dispath = useDispatch();

  const isOpenDrawer = useSelector<RootState, boolean>(
    (state) => state.users.isOpenDrawer
  );

  const toggleDrawer = () => {
    dispath(updateIsOpenDrawer(!isOpenDrawer));
  };

  return (
    <button
      onClick={toggleDrawer}
      className="block sm:hidden w-[40px] h-[40px] p-2 border border-black dark:border-white rounded-md
              flex items-center justify-center focus:outline-none hover:bg-zinc-200 dark:hover:bg-primary-gray"
    >
      <VscThreeBars size={20} />
    </button>
  );
};

export default DrawerBtn;
