import CustomButton from "../customButton/CustomButton";
import { GoLink } from "react-icons/go";
const SearchBar = () => {
    return (
        <div className="relative flex-grow mx-4 w-full max-w-[1000px]">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
          <span className="text-gray-400 mr-2">
          <GoLink size={30}/>
          </span>
          <input 
            type="text" 
            placeholder="Enter the link here"
            className="bg-transparent border-none outline-none w-full text-gray-300 placeholder-gray-400" 
          />
          <CustomButton title="Shorten Now!" width="183px" />
        </div>
      </div>
    );
  };
  
  export default SearchBar;