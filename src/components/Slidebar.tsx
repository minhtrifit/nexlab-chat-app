/* eslint-disable react-refresh/only-export-components */
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FaHome, FaCalendarMinus } from "react-icons/fa";
import {
  IoChatbubbleEllipses,
  IoDocumentText,
  IoSettings,
} from "react-icons/io5";
import { GoTag } from "react-icons/go";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { USER_TYPE } from "../types/user.type";

export const SLIDEBAR_ITEMS = [
  {
    name: "HOME",
    icon: <FaHome size={20} />,
    url: "/",
  },
  {
    name: "CHAT",
    icon: <IoChatbubbleEllipses size={20} />,
    url: "/chat",
  },
  {
    name: "CALENDAR",
    icon: <FaCalendarMinus size={20} />,
    url: "/calendar",
  },
  {
    name: "OFFERS",
    icon: <GoTag size={20} />,
    url: "/offers",
  },
  {
    name: "DOCUMENTS",
    icon: <IoDocumentText size={20} />,
    url: "/documents",
  },
  {
    name: "SETTINGS",
    icon: <IoSettings size={23} />,
    url: "/settings",
  },
];

const Slidebar = () => {
  const location = useLocation();

  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  return (
    <div
      className="hidden sm:block w-[250px] h-full overflow-y-auto text-gray-600 dark:text-white bg-light-gray dark:bg-primary-gray
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
          (item: { name: string; icon: React.ReactElement; url: string }) => {
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
  );
};

export default Slidebar;
