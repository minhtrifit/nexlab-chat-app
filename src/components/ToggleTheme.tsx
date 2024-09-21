import { useEffect, useState } from "react";
import { toggleThemeMode } from "../utils/utils";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const themevalue = localStorage.getItem("theme");
    if (themevalue !== null) setTheme(themevalue);
  }, []);

  return (
    <button
      className="w-[40px] h-[40px] border border-black dark:border-white rounded-md flex items-center justify-center
                  hover:bg-zinc-200 dark:hover:bg-primary-gray"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        toggleThemeMode();
      }}
    >
      {theme === "light" ? (
        <FaMoon size={20} />
      ) : (
        <MdOutlineWbSunny size={20} />
      )}
    </button>
  );
};

export default ToggleTheme;
