import ToggleTheme from "../components/ToggleTheme";
import DrawerBtn from "../components/DrawerBtn";

const HomePage = () => {
  return (
    <div
      className="w-full sm:w-[calc(100%-250px)] max-h-full p-6 overflow-y-auto text-black dark:text-white
                  bg-gray-100 dark:bg-secondary-gray"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3">
          <img className="w-[150px]" src="/assets/nexlab.svg" />
          <span className="text-xl text-gray-600 dark:text-sky-500 font-bold">
            Chat Application
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          <DrawerBtn />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
