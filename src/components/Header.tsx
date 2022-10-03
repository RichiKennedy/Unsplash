import SearchBar from "../subComponents/SearchBar";

const Header = () => {
  return (
    <div className=" bg-gray-900 flex items-center py-10 h-[200px]  ">
      <div className="   w-full h-full flex flex-col items-center justify-between  ">
        <h1 className=" text-white  text-2xl font-bold "> Find Images </h1>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
