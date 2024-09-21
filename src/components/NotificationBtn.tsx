import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const NotificationBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
        className={`absolute right-0 mt-2 w-[350px] bg-white dark:bg-primary-gray
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
          <p>Notification information</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationBtn;
