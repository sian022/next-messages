import { InputProps } from "@/types/common";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchInput = ({ type, ...props }: InputProps) => {
  let className =
    "w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  if (props.className) className += ` ${props.className}`;

  return (
    <div className="relative">
      <input className={className} placeholder="Search" {...props} />
      <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
