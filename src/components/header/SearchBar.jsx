/* eslint-disable react/prop-types */
const SearchBar = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(props.search);
        props.resetSearch();
      }}
    >
      <input
        type="search"
        placeholder="Search"
        className="input max-w-xs"
        autoFocus
        onChange={props.onSearch}
      />
    </form>
  );
};

export default SearchBar;
