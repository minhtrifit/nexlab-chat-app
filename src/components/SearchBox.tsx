import { IoIosSearch } from "react-icons/io";

interface PropType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = (props: PropType) => {
  const { searchValue, setSearchValue } = props;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SEARCH SUBMIT:", searchValue);
  };

  return (
    <form
      className="relative w-full"
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <IoIosSearch
        className="absolute top-0 bottom-0 my-auto left-2"
        size={25}
      />
      <input
        className="w-full px-10 py-4 text-md shadow-md dark:bg-primary-gray
                    focus:outline-none focus:ring-2 focus:ring-light-gray dark:focus:ring-sky-500"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBox;
