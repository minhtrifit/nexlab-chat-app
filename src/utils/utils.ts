import { CHAT_TYPE } from "../types/chat.type";
import { USER_TYPE } from "../types/user.type";

export const FRIENDS_DATA: USER_TYPE[] = [
  {
    id: "1a2b3c4d",
    name: "Alice Johnson",
    location: "New York, USA",
  },
  {
    id: "2e3f4g5h",
    name: "Brandon Lee",
    location: "Toronto, Canada",
  },
  {
    id: "3i4j5k6l",
    name: "Catherine Nguyen",
    location: "Sydney, Australia",
  },
  {
    id: "4m5n6o7p",
    name: "Daniel Martinez",
    location: "London, UK",
  },
  {
    id: "5q6r7s8t",
    name: "Emily Zhao",
    location: "Beijing, China",
  },
];

export const CHATS_DATA = [
  {
    id: "1001",
    fromId: "1",
    toId: "1a2b3c4d",
    sendAt: "15/09/2024 10:00:00", // September
    message: "Hey Alice, how are you?",
  },
  {
    id: "1002",
    fromId: "1a2b3c4d",
    toId: "1",
    sendAt: "03/10/2024 10:05:00", // October
    message: "I'm good, thanks for asking!",
  },
  {
    id: "1003",
    fromId: "1",
    toId: "2e3f4g5h",
    sendAt: "22/11/2024 10:10:00", // November
    message: "Brandon, are you free this weekend?",
  },
  {
    id: "1004",
    fromId: "2e3f4g5h",
    toId: "1",
    sendAt: "07/12/2024 10:15:00", // December
    message: "Yeah, let's catch up!",
  },
  {
    id: "1005",
    fromId: "1",
    toId: "3i4j5k6l",
    sendAt: "19/01/2025 10:20:00", // January
    message: "Catherine, have you finished the project?",
  },
  {
    id: "1006",
    fromId: "3i4j5k6l",
    toId: "1",
    sendAt: "11/02/2025 10:25:00",
    message: "Almost done, just a few final touches.",
  },
  {
    id: "1007",
    fromId: "1",
    toId: "4m5n6o7p",
    sendAt: "28/03/2025 10:30:00",
    message: "Daniel, let's meet at the usual spot.",
  },
  {
    id: "1008",
    fromId: "4m5n6o7p",
    toId: "1",
    sendAt: "15/04/2025 10:35:00",
    message: "Sounds good, see you there!",
  },
  {
    id: "1009",
    fromId: "1",
    toId: "5q6r7s8t",
    sendAt: "01/05/2025 10:40:00",
    message: "Emily, how’s Beijing treating you?",
  },
  {
    id: "1010",
    fromId: "5q6r7s8t",
    toId: "1",
    sendAt: "22/06/2025 10:45:00",
    message: "It’s great! You should visit sometime.",
  },
  {
    id: "1011",
    fromId: "1",
    toId: "6u7v8w9x",
    sendAt: "10/07/2025 10:50:00",
    message: "Felix, are you going to the conference?",
  },
  {
    id: "1012",
    fromId: "6u7v8w9x",
    toId: "1",
    sendAt: "25/08/2025 10:55:00",
    message: "Yes, I'll be there next week.",
  },
  {
    id: "1013",
    fromId: "1",
    toId: "7y8z9a0b",
    sendAt: "18/09/2025 11:00:00",
    message: "Grace, how’s the new project going?",
  },
  {
    id: "1014",
    fromId: "7y8z9a0b",
    toId: "1",
    sendAt: "30/10/2025 11:05:00",
    message: "It’s going well, a bit challenging though.",
  },
  {
    id: "1015",
    fromId: "1",
    toId: "8c9d0e1f",
    sendAt: "15/11/2025 11:10:00",
    message: "Henry, let’s grab lunch sometime!",
  },
  {
    id: "1016",
    fromId: "8c9d0e1f",
    toId: "1",
    sendAt: "20/12/2025 11:15:00",
    message: "For sure, let's do it next week.",
  },
];

export const toggleThemeMode = () => {
  const themeMode = localStorage.getItem("theme");

  if (themeMode === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export const getLastestChat = (
  chats: CHAT_TYPE[],
  fromId: string,
  toId: string
) => {
  const lastestChats: CHAT_TYPE[] = [];

  for (let i = 0; i < chats?.length; ++i) {
    if (chats[i].fromId === fromId && chats[i].toId === toId)
      lastestChats.push(chats[i]);
  }

  for (let i = 0; i < chats?.length; ++i) {
    if (chats[i].fromId === toId && chats[i].toId === fromId)
      lastestChats.push(chats[i]);
  }

  return lastestChats;
};

// Input: "21/09/2024 11:35:00" => Output: "21 Sep"
export const formatDate = (dateString: string) => {
  const [day, month, year] = dateString.split(" ")[0].split("/");

  const date = new Date(`${year}-${month}-${day}`);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(date);

  return formattedDate;
};
