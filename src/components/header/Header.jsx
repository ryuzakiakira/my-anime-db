/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBarHandler = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  let search = (
    <button className="btn btn-ghost btn-circle" onClick={searchBarHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );

  return (
    <div className="navbar bg-base-100 mb-9">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <button
          className="btn btn-ghost normal-case text-3xl"
          onClick={props.onClick}
        >
          My<strong>Anime</strong>DB
        </button>
      </div>
      <div className="navbar-end">
        {!showSearchBar && search}
        {showSearchBar && (
          <SearchBar
            onSearch={props.onSearch}
            onSubmit={props.onSubmit}
            resetSearch={searchBarHandler}
            search={props.search}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
