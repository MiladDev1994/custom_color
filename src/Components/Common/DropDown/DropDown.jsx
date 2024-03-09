// @ts-nocheck
import React, { useState } from "react";
import { useEffect } from "react";
import List from "../List/List";
import styles from "./DropDown.module.scss";
import SearchInput from "../SearchInput/SearchInput";
import Icon from "../Icon/Icon";
import palletIcon from "../../Styles/pallet";
const DropDown = ({
  label,
  itemLabel = "label",
  onChange = console.log,
  items = [],
  isRequired,
  selectedItem = -1,
  className = "",
  classNames = {button: {}},
  style = { dropDown: {}, list: {}, input: {}, button: {}, selected: {} },
  isSearchable = false,
  excludedKeys = ["id"],
  listHeight = "",
  maxLength = -1,
  resetFlag=0,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [_selectedItem, setSelectedItem] = useState(selectedItem);

  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(items);

  const onSelect = (id) => {
    setInput(items.find((item) => item.id === id)[itemLabel]);
    setSelectedItem(id);
    setIsOpen(false);
    onChange(items.find((item) => item.id === id).value);
    setFilteredSuggestions(items);
  };
  useEffect(() => {
    if (selectedItem !== _selectedItem) {
      setSelectedItem(selectedItem);
    }
  }, [selectedItem]);
  useEffect(() => {
    if(resetFlag > 0)
      {
        setSelectedItem(-1);
        setInput("");
      }
  }, [resetFlag]);
  return (
    <div
      className={`${styles.dropDown} ${className}`}
      style={style.dropDown}
      onBlur={(e) => {
        let currentTarget = e.currentTarget;
        setTimeout(() => {
          if (!currentTarget.contains(document.activeElement)) setIsOpen(false);
        }, 0);
      }}
      tabIndex={0}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {label && (
        <div className={styles.label}>
          <p className={isRequired ? styles.labelRequired : ""}>{label}</p>
        </div>
      )}
      <div
        className={`${styles.button} ${
          _selectedItem >= 0 && _selectedItem < items.length
            ? styles.selected
            : ""
        } ${classNames.button}`}
        style={style.button}
      >
        {isSearchable ? (
          <SearchInput
            input={input}
            setInput={setInput}
            items={items}
            placeholder="انتخاب"
            searchKeys={["label"]}
            setFilteredSuggestions={setFilteredSuggestions}
            className={styles.input}
            style={style.input}
            maxLength={maxLength}
          />
        ) : (
          <p className={_selectedItem == -1 ? styles.notSelected : ""} style={style.selected}>
            {_selectedItem >= 0 && _selectedItem < items.length
              ? items.find((item) => item.id === _selectedItem)?.[itemLabel]
              : label
              ? label
              : "انتخاب"}
          </p>
        )}
        <Icon className={styles.carret} name="carret" width="0.6em" height="0.6em" color={palletIcon.colorBlackText} isCircle />
      </div>
      {/* {true && ( */}
      {isOpen && (
        <div className={styles.listContainer} style={style.listContainer}>
          <div
            className={styles.list}
            style={{ ...style.list, height: listHeight }}
          >
            <List
              items={filteredSuggestions}
              isSelectable={false}
              onClickItem={onSelect}
              excludedKeys={excludedKeys}
              style={style}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
