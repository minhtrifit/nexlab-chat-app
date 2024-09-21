import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosSend } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addChat } from "../redux/actions/chat.actions";

import { CHAT_TYPE } from "../types/chat.type";
import { USER_TYPE } from "../types/user.type";
import { getSendAtTime } from "../utils/utils";

import EmojiBtn from "./EmojiBtn";

interface PropType {
  targetChat: { user: USER_TYPE | null; chats: CHAT_TYPE[] };
  setTargetChat?: React.Dispatch<
    React.SetStateAction<{
      user: USER_TYPE | null;
      chats: CHAT_TYPE[];
    }>
  >;
}

const ChatBox = (props: PropType) => {
  const { targetChat, setTargetChat } = props;

  const dispath = useDispatch();

  const chatBoxref = useRef<HTMLDivElement | null>(null);

  const [chatInputValue, setChatInputValue] = useState<string>("");

  const currentUser = useSelector<RootState, USER_TYPE | null>(
    (state) => state.users.currentUser
  );

  const chats = useSelector<RootState, CHAT_TYPE[]>(
    (state) => state.chats.chats
  );

  const scrollToBottom = () => {
    chatBoxref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentUser?.id && targetChat?.user?.id && chatInputValue !== "") {
      const newChat: CHAT_TYPE = {
        id: uuidv4(),
        fromId: currentUser?.id,
        toId: targetChat?.user?.id,
        message: chatInputValue,
        sendAt: getSendAtTime(),
      };

      dispath(addChat(newChat));
      setChatInputValue("");

      // Update new target chat
      if (setTargetChat) {
        const newChats = targetChat?.chats;
        newChats.push(newChat);

        setTargetChat({ ...targetChat, chats: newChats });

        const chatsSaveData: any = [...chats];
        chatsSaveData.push(newChat);
        localStorage.setItem("chats", JSON.stringify(chatsSaveData));
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, targetChat]); // Scroll end effect when add new message

  return (
    <div className="relative w-full h-[calc(100vh-150px)] flex-col gap-5">
      <div
        className="w-full px-6 pb-1 flex flex-col gap-1
                    border-b border-zinc-300 dark:border-primary-gray"
      >
        <h1 className="text-[1.35rem] font-bold">
          {targetChat?.user?.name ? targetChat?.user?.name : "undefined"}
        </h1>
        <span className="text-[0.8rem] font-semibold text-zinc-500 dark:text-zinc-400">
          From:{" "}
          {targetChat?.user?.location
            ? targetChat?.user?.location
            : "undefined"}
        </span>
      </div>
      <div className="mt-10 px-6 pb-4 h-[calc(100%-160px)] overflow-y-auto flex flex-col gap-y-10">
        {targetChat?.chats?.map((chat: CHAT_TYPE) => {
          return (
            <div
              key={uuidv4()}
              className={`w-full flex items-center ${
                chat?.fromId === currentUser?.id
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div className="flex items-center gap-3">
                {chat?.fromId !== currentUser?.id && (
                  <div
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center
                              bg-light-gray dark:bg-primary-gray"
                  >
                    {targetChat?.user?.name
                      ? targetChat?.user?.name.charAt(0)
                      : "undefined"}
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <span
                    className={`px-4 py-2 rounded-full ${
                      chat?.fromId === currentUser?.id
                        ? "bg-light-gray dark:bg-sky-500"
                        : "bg-zinc-200 dark:bg-primary-gray"
                    }`}
                  >
                    {chat?.message}
                  </span>
                  <span
                    className={`text-[0.7rem] text-zinc-500 dark:text-zinc-400 ${
                      chat?.fromId === currentUser?.id
                        ? "text-end pr-2"
                        : "pl-2"
                    }`}
                  >
                    {chat?.sendAt}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={chatBoxref} /> {/* Scroll target */}
      </div>
      <form
        className="relative absolute bottom-0 w-full h-[60px]"
        onSubmit={(e) => {
          handleSendChat(e);
        }}
      >
        <div className="absolute top-0 bottom-0 my-auto left-2 flex items-center">
          <EmojiBtn
            chatInputValue={chatInputValue}
            setChatInputValue={setChatInputValue}
          />
        </div>
        <input
          className="w-full h-full px-14 rounded-sm bg-light-gray dark:bg-primary-gray"
          placeholder="Type a message..."
          value={chatInputValue}
          onChange={(e) => {
            setChatInputValue(e.target.value);
          }}
        />
        <button
          className="absolute top-4 right-4 flex items-center justify-center p-1
                    text-zinc-600 dark:text-white bg-white dark:bg-sky-500 rounded-full
                    hover:bg-zinc-100 dark:hover:bg-sky-400"
        >
          <IoIosSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
