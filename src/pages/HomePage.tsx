import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { USER_TYPE } from "../types/user.type";

import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";
import NotificationBtn from "../components/NotificationBtn";
import SearchBox from "../components/SearchBox";

import { IoChatbubblesSharp, IoPersonAdd } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import {
  FaUserFriends,
  FaSkype,
  FaChevronLeft,
  FaChevronRight,
  FaRegClock,
  FaRegCheckCircle,
} from "react-icons/fa";
import { IoIosTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { RiFlowerFill } from "react-icons/ri";
import { BiLogoZoom } from "react-icons/bi";
import { SiGooglemeet } from "react-icons/si";

const ACTIVITY_DATA = [
  { name: "Mon", number: "40%" },
  { name: "Tue", number: "30%" },
  { name: "Wed", number: "50%" },
  { name: "Thu", number: "45%" },
  { name: "Fri", number: "80%" },
  { name: "Sat", number: "60%" },
  { name: "Sun", number: "70%" },
];

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
          <IoChatbubblesSharp
            className="text-blue-500 dark:text-white"
            size={40}
          />
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
      <div className="mt-5 w-full flex flex-wrap items-center justify-between gap-5">
        <div className="w-[100%] w-[400px]">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="h-[40px] flex items-center gap-3">
          <button
            className="h-full text-sm flex items-center gap-2 px-4 py-2 rounded-md
                        bg-light-gray dark:bg-primary-gray"
          >
            <MdDateRange size={20} />
            Date
          </button>
          <button
            className="h-full text-sm flex items-center gap-2 px-4 rounded-md
                        bg-light-gray dark:bg-primary-gray"
          >
            <IoPersonAdd size={20} />
            Add Friend
          </button>
        </div>
      </div>
      <div className="mt-8 w-full h-[calc(100vh-300px)] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="h-[160px] grid rounded-md bg-white dark:bg-primary-gray">
            <div className="px-4 py-2">
              <h1 className="text-md font-thin">All Friends</h1>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FaUserFriends
                    className="text-blue-500 dark:text-sky-500"
                    size={32}
                  />
                  <p className="text-2xl">1.247</p>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1 rounded-md text-sm
                              bg-green-300 text-green-700 font-bold"
                >
                  <IoIosTrendingUp size={25} />
                  <p>150</p>
                </div>
              </div>
            </div>
            <div
              className="self-end px-4 py-2 text-sm rounded-b-md bg-zinc-200 dark:bg-zinc-800
                            text-zinc-500 dark:text-zinc-400"
            >
              From Jan 01, 2024 - March 30, 2024
            </div>
          </div>
          <div className="h-[160px] grid rounded-md bg-white dark:bg-primary-gray">
            <div className="px-4 py-2">
              <h1 className="text-md font-thin">All Chats</h1>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <AiFillMessage
                    className="text-blue-500 dark:text-sky-500"
                    size={32}
                  />
                  <p className="text-2xl">5.426</p>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1 rounded-md text-sm
                              bg-red-300 text-red-700 font-bold"
                >
                  <IoMdTrendingDown size={25} />
                  <p>1.024</p>
                </div>
              </div>
            </div>
            <div
              className="self-end px-4 py-2 text-sm rounded-b-md bg-zinc-200 dark:bg-zinc-800
                            text-zinc-500 dark:text-zinc-400"
            >
              From Jan 01, 2024 - March 30, 2024
            </div>
          </div>
          <div className="h-[160px] grid rounded-md bg-white dark:bg-primary-gray">
            <div className="px-4 py-2">
              <h1 className="text-md font-thin">All Activity</h1>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FiActivity
                    className="text-blue-500 dark:text-sky-500"
                    size={32}
                  />
                  <p className="text-2xl">360</p>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1 rounded-md text-sm
                              bg-green-300 text-green-700 font-bold"
                >
                  <IoIosTrendingUp size={25} />
                  <p>20</p>
                </div>
              </div>
            </div>
            <div
              className="self-end px-4 py-2 text-sm rounded-b-md bg-zinc-200 dark:bg-zinc-800
                            text-zinc-500 dark:text-zinc-400"
            >
              From Jan 01, 2024 - March 30, 2024
            </div>
          </div>
        </div>
        <div className="mt-5 w-full grid grid-cols-1 xl:grid-cols-3 gap-3">
          <div className="relative w-full h-[800px] p-4 rounded-md bg-white dark:bg-primary-gray">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Activity</h1>
              <button
                className="h-full text-sm flex items-center gap-2 px-4 py-2 rounded-md
                        bg-light-gray dark:bg-secondary-gray"
              >
                <MdDateRange size={20} />
                Last 7 days
              </button>
            </div>
            <div className="w-full my-5 flex gap-3">
              <h1 className="font-bold text-4xl">24.9</h1>
              <div className="text-sm font-thin flex flex-col text-gray-500 dark:text-gray-400">
                <p>Hours</p>
                <p>Spent</p>
              </div>
            </div>
            <div
              className="absolute bottom-[350px] left-0 p-4 w-full h-[calc(100%-480px)]
                          flex items-end justify-between gap-1"
            >
              {ACTIVITY_DATA?.map((item: { name: string; number: string }) => {
                return (
                  <div
                    key={uuidv4()}
                    style={{ height: item?.number }}
                    className="w-[10%] my-3 flex flex-col items-center gap-2"
                  >
                    <div className="w-full h-full bg-light-gray dark:bg-sky-500 rounded-md" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item?.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[calc(100%-450px)] p-4">
              <div className="w-full h-full bg-zinc-100 dark:bg-secondary-gray rounded-md p-4">
                <h1 className="text-xl font-semibold">By Platform</h1>
                <div className="h-[calc(100%-50px)] mt-5 flex flex-col justify-between gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <RiFlowerFill size={25} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          8 lessons
                        </p>
                        <p>Mondly platform</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">12.5 h</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <BiLogoZoom size={30} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          5 lessons
                        </p>
                        <p>Zoom</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">6.8 h</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <SiGooglemeet size={23} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          3 lessons
                        </p>
                        <p>Google Meet</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">4.2 h</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <FaSkype size={25} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          2 lessons
                        </p>
                        <p>Skype</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">2.5 h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-2 w-full h-[1400px] sm:h-[800px] rounded-md
                          grid grid-row-2 gap-y-2"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="h-full bg-white dark:bg-primary-gray p-4 rounded-md flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold">Process statistics</h1>
                  <div className="w-full my-5 flex gap-3">
                    <h1 className="font-bold text-4xl">64%</h1>
                    <div className="text-sm font-thin flex flex-col text-gray-500 dark:text-gray-400">
                      <p>Total</p>
                      <p>activity</p>
                    </div>
                  </div>
                </div>
                <div className="left-0 w-full grid grid-cols-3 gap-3">
                  <div
                    className="bg-zinc-100 dark:bg-secondary-gray rounded-md py-4
                                flex flex-col gap-y-8 items-center justify-between"
                  >
                    <FaRegClock
                      className="text-white bg-purple-600 rounded-full p-3"
                      size={45}
                    />
                    <div className="flex flex-col items-center">
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        In Progress
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-zinc-100 dark:bg-secondary-gray rounded-md py-4
                                flex flex-col gap-y-8 items-center justify-between"
                  >
                    <FaRegCheckCircle
                      className="text-white bg-green-600 rounded-full p-3"
                      size={45}
                    />
                    <div className="flex flex-col items-center">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Completed
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-zinc-100 dark:bg-secondary-gray rounded-md py-4
                                flex flex-col gap-y-8 items-center justify-between"
                  >
                    <MdDateRange
                      className="text-white bg-orange-600 rounded-full p-3"
                      size={45}
                    />
                    <div className="flex flex-col items-center">
                      <p className="text-2xl font-bold">14</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Upcoming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full bg-white dark:bg-primary-gray p-4 rounded-md flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                  <h1 className="text-xl font-semibold">Group course</h1>
                  <h1 className="text-2xl font-bold">
                    English punctuation made easy
                  </h1>
                  <span className="text-[0.9rem] text-justify text-zinc-500 dark:text-zinc-400">
                    Punctuation - learn the basics without the pain. People will
                    never laught at your puncutation again. You do not require
                    any materials of software.
                  </span>
                </div>
                <button className="bg-light-gray dark:bg-secondary-gray py-2 rounded-md">
                  Continue learning
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-primary-gray p-4 rounded-md">
              <div className="w-full h-[50px] flex items-center justify-between">
                <h1 className="text-xl font-semibold">My Schedule</h1>
                <div className="flex items-center gap-5">
                  <FaChevronLeft
                    className="rounded-full p-2 bg-zinc-200 dark:bg-secondary-gray"
                    size={30}
                  />
                  <p className="font-semibold">Today</p>
                  <FaChevronRight
                    className="rounded-full p-2 bg-zinc-200 dark:bg-secondary-gray"
                    size={30}
                  />
                </div>
              </div>
              <div className="mt-5 h-[calc(100%-70px)] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3">
                <div className="bg-zinc-100 dark:bg-secondary-gray rounded-md p-4 flex flex-col justify-between">
                  <div className="flex flex-col gap-5">
                    <p className="text-gray-500 dark:text-gray-400">
                      10:30 - 12:00
                    </p>
                    <h1 className="text-2xl font-bold">
                      Technical English for Beginers
                    </h1>
                    <div className="w-full flex items-center gap-3 flex-wrap">
                      <div className="bg-blue-400 text-blue-800 p-2 rounded-md text-sm font-bold">
                        Beginner
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div
                      className="w-[40px] h-[40px] bg-light-gray dark:bg-primary-gray rounded-full
                                    text-sm font-bold flex items-center justify-center"
                    >
                      K
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">Kristin Watson</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Mentor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-light-gray dark:bg-sky-500 rounded-md p-4 flex flex-col justify-between">
                  <div className="flex flex-col gap-5">
                    <p className="text-gray-500 dark:text-gray-200">
                      13:00 - 14:00
                    </p>
                    <h1 className="text-2xl font-bold">
                      English punctuation made easy
                    </h1>
                    <div className="w-full flex items-center gap-3 flex-wrap">
                      <div className="bg-blue-200 text-blue-500 p-2 rounded-md text-sm font-bold">
                        Advanced
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div
                      className="w-[40px] h-[40px] bg-light-gray dark:bg-primary-gray rounded-full
                                    text-sm font-bold flex items-center justify-center"
                    >
                      C
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">Cody Fisher</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-200">
                        Mentor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-100 dark:bg-secondary-gray rounded-md p-4 hidden 2xl:flex flex-col justify-between">
                  <div className="flex flex-col gap-5">
                    <p className="text-gray-500 dark:text-gray-400">
                      16:00 - 17:00
                    </p>
                    <h1 className="text-2xl font-bold">
                      Technical Spanish for Beginers
                    </h1>
                    <div className="w-full flex items-center gap-3 flex-wrap">
                      <div className="bg-blue-400 text-blue-800 p-2 rounded-md text-sm font-bold">
                        Beginner
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div
                      className="w-[40px] h-[40px] bg-light-gray dark:bg-primary-gray rounded-full
                                    text-sm font-bold flex items-center justify-center"
                    >
                      J
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">Jacob Jones</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Mentor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full p-2 bg-red-500">table</div>
      </div>
    </div>
  );
};

export default HomePage;
