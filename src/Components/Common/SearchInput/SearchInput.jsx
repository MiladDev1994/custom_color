// @ts-nocheck
import React from "react";
function SearchInput({
  input = "",
  setInput = console.log,
  items = [],
  searchKeys = ["name"],
  setFilteredSuggestions = console.log,
  placeholder = "",
  maxLength = -1,
  className = "",
  style = {},
}) {
  const onChangeInput = (e) => {
    const userInput = e.target.value;

    let unLinked;
    if (searchKeys.length === 1) {
      unLinked = items.filter(
        (suggestion) =>
          suggestion[searchKeys[0]]
            .toLowerCase()
            .toLocaleString()
            .indexOf(userInput.toLowerCase().toLocaleString()) > -1
      );
    } else {
      let suggestions = [];
      searchKeys.forEach((searchKey) => {
        let temp = items.map((suggestion) => {
          if (
            suggestion[searchKey]
              .toLowerCase()
              .toLocaleString()
              .indexOf(userInput.toLowerCase().toLocaleString()) > -1
          )
            suggestions.push(suggestion);
        });
        suggestions.concat(temp);
      });
      unLinked = [...new Set(suggestions)];
    }
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      onChange={onChangeInput}
      value={input}
      style={style}
      maxLength={maxLength}
    />
  );
}

export default SearchInput;
