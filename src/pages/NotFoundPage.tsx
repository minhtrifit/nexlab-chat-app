import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="w-full sm:w-[calc(100%-250px)] max-h-full p-6 overflow-hidden text-black dark:text-white
                  bg-gray-100 dark:bg-secondary-gray flex items-center justify-center"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-3xl font-bold">PAGE NOT FOUND</span>
        <Link to="/" className="font-semibold hover:text-sky-500">
          Click here to return home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
