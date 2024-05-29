import Button from "@/components/Common/Button";
import SearchInput from "@/components/Common/SearchInput";
import React from "react";

const SearchAndActions = () => {
  return (
    <div className="flex gap-4 ">
      {/* <Button className="p-2">Profile</Button> */}

      <SearchInput placeholder="Search messages" />
    </div>
  );
};

export default SearchAndActions;
