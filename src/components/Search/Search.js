import React from "react";
import Chooser from "components/Chooser/Chooser";
import EnginesData from "data";

const chooserOptions = Object.entries(EnginesData).map(([key]) => ({
  value: key,
  label: key,
}));

const chooserDefaultValue = { label: "DuckDuckGo", value: "DuckDuckGo" };

const Search = () => (
  <div id="search">
    <Chooser options={chooserOptions} defaultValue={chooserDefaultValue} /> <input type="text" autoFocus="autoFocus" />{" "}
    <button>Search</button>
  </div>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
