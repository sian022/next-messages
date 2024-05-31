import { InputProps } from "@/types/common";
import cn from "@/utils/cn";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchInput = ({
  type,
  className: customClassName,
  ...props
}: InputProps) => {
  const baseClasses =
    "w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  const className = cn(baseClasses, customClassName);

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
