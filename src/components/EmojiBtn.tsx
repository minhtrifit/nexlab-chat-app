import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FaRegSmile } from "react-icons/fa";

interface PropType {
  chatInputValue: string;
  setChatInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const EMOJI_LIST = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹"];

const EmojiBtn = (props: PropType) => {
  const { chatInputValue, setChatInputValue } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChooseEmoji = (emoji: any) => {
    const newChatvalue = chatInputValue + " " + emoji;
    setChatInputValue(newChatvalue);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-[40px] h-[40px] flex items-center justify-center
                   focus:outline-none hover:text-zinc-500 dark:hover:text-zinc-400"
      >
        <FaRegSmile size={23} />
      </button>
      <div
        className={`absolute left-0 bottom-[60px] mb-2 w-[250px] flex items-center justify-center
                    bg-white dark:bg-primary-gray
                    text-black dark:text-white rounded-md shadow-lg z-10
                    transition-transform duration-300 ease-in-out 
                    ${
                      isOpen
                        ? "translate-y-2 opacity-100"
                        : "translate-y-0 opacity-0 pointer-events-none"
                    }`}
        style={{ transform: isOpen ? "translateY(8px)" : "translateY(0)" }}
      >
        <div className="py-6 grid grid-cols-5 gap-3">
          {EMOJI_LIST?.map((emoji: any) => {
            return (
              <div
                key={uuidv4()}
                className="w-[30px] h-[30px] flex items-center justify-center rounded-md
                            hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xl hover:cursor-pointer"
                onClick={(e: any) => {
                  handleChooseEmoji(e.target.innerText);
                }}
              >
                {emoji}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmojiBtn;
