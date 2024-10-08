import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { SLIDEBAR_ITEMS } from "./Slidebar";
import { USER_TYPE } from "../types/user.type";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateIsOpenDrawer } from "../redux/actions/users.action";

import { IoMdClose } from "react-icons/io";

const Drawer = () => {
  const dispath = useDispatch();
  const location = useLocation();

  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  const isOpenDrawer = useSelector<RootState, boolean>(
    (state) => state.users.isOpenDrawer
  );

  const toggleDrawer = () => {
    dispath(updateIsOpenDrawer(!isOpenDrawer));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpenDrawer ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      <div
        className={`fixed top-0 left-0 w-64 h-full overflow-y-auto text-gray-600 dark:text-white
                    bg-light-gray dark:bg-primary-gray shadow-lg z-50 transform transition-transform duration-300 ${
                      isOpenDrawer ? "translate-x-0" : "-translate-x-full"
                    }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-2 p-2 focus:outline-none"
        >
          <IoMdClose size={25} />
        </button>
        <div
          className="w-full h-full text-gray-600 dark:text-white bg-light-gray dark:bg-primary-gray
                  flex flex-col items-center pt-[50px]"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center">
              <img
                className="w-[90%] h-[90%] rounded-full"
                src="/assets/avatar.png"
                alt="avatar"
              />
            </div>
            <span className="text-md font-bold">
              {currentUser?.name ? currentUser?.name : "undifined"}
            </span>
          </div>
          <div className="mt-5 w-full flex flex-col gap-y-1">
            {SLIDEBAR_ITEMS?.map(
              (item: {
                name: string;
                icon: React.ReactElement;
                url: string;
              }) => {
                return (
                  <Link to={item?.url} key={uuidv4()}>
                    <div
                      className={`relative w-full px-6 py-3 flex items-center gap-x-5 ${
                        location?.pathname === item?.url &&
                        "bg-active-gray dark:bg-sky-500 text-sky-600 dark:text-white"
                      }`}
                    >
                      {location?.pathname === item?.url && (
                        <div className="absolute w-[5px] h-full left-0 bg-sky-600 dark:bg-white" />
                      )}
                      <div className="w-[30px] h-[30px] flex items-center justify-center">
                        {item?.icon}
                      </div>
                      <span className="max-w-[150px] text-sm font-semibold truncate">
                        {item?.name}
                      </span>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
