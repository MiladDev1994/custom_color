// @ts-nocheck
import React, { useEffect, useState } from "react";

import ListItem from "../ListItem/ListItem";
import SearchInput from "../SearchInput/SearchInput";

import styles from "./List.module.scss";
const List = ({
  columnsTemplate = [],
  items = [],
  isSelectable = true,
  isSearchable = false,
  isMultiSelect = true,
  searchKeys = ["name"],
  placeHolderValue = "گزینه",
  titles = [],
  excludedKeys = [],
  selectedItems = undefined,
  setSelectedItems = console.log,
  onClickItem = console.log,
  classNames = {
    tableRow: "",
    tableHeader: "",
    tableContent: "",
    headerItem: "",
    tableData: "",
    checkbox: "",
    isactive: "",
  },
  style = {
    tableRow: {},
    tableHeader: {},
    tableContent: {},
    headerItem: {},
    tableData: {},
    checkbox: {},
    isactive: {},
    tableCheckBox:{},
  },
}) => {
  const [input, setInput] = useState("");

  const [sortBy, setSortBy] = useState("");
  const [isAscSort, setIsAscSort] = useState(true);

  const [selectedList, setSelectedList] = useState(
    selectedItems ? selectedItems : []
  );
  const [filteredSuggestions, setFilteredSuggestions] = useState(
    Array.isArray(items) ? items : Object.values(items)
  );

  useEffect(() => {
    if (selectedItems) {
      setSelectedList(selectedItems);
    }
  }, [selectedItems]);

  if (columnsTemplate.length > 0) {
    columnsTemplate = columnsTemplate.map((item) => `${item}fr`).join(" ");
  } else {
    columnsTemplate = "1fr ".repeat(titles.length);
  }
  useEffect(() => {
    setFilteredSuggestions(Array.isArray(items) ? items : Object.values(items));
  }, [items]);
  const onSelectItem = (id) => {
    let list = [].concat(selectedList);
    if (isMultiSelect) {
      if (!selectedList.includes(id)) {
        list.push(id);
      } else {
        list = list.filter((item) => item !== id);
      }
    } else {
      list = !selectedList.includes(id) ? [id] : [];
    }
    setSelectedList(list);
    setSelectedItems(list);
  };

  const sortList = (dataKey) => {
    setSortBy(dataKey);
    if (sortBy !== dataKey) {
      filteredSuggestions.sort((a, b) => {
        if (typeof a[dataKey] == "number" && typeof b[dataKey] == "number") {
          return a[dataKey] < b[dataKey];
        } else {
          return a[dataKey]
            .toString()
            .localeCompare(b[dataKey].toString(), { numeric: true });
        }
      });
      setIsAscSort(true);
    } else {
      filteredSuggestions.reverse();
      setIsAscSort(!isAscSort);
    }
  };
  return (
    <div className={styles.tableContainer}>
      <div
        className={styles.table}
        style={{
          "--columnsTemplate": columnsTemplate,
        }}
      >
        {isSearchable && (
          <div className={styles.searchContainer}>
            <SearchInput
              input={input}
              setInput={setInput}
              items={Array.isArray(items) ? items : Object.values(items)}
              searchKeys={searchKeys}
              setFilteredSuggestions={setFilteredSuggestions}
              placeholder={`جستجو ${placeHolderValue} مورد نظر...`}
              className={styles.searchInput}
            />
          </div>
        )}
        {titles.length > 0 && (
          <div
            className={`${styles.tableRow} ${classNames.tableRow} ${styles.tableHeader} ${classNames.tableHeader}`}
            style={(style.tableRow, style.tableHeader)}
          >
            {isSelectable && (
              <div
                className={`${styles.headerItem} ${classNames.headerItem}`}
                style={style.headerItem}
              />
            )}
            {titles.map((item) => (
              <div
                key={`listTitle_${item.dataKey}`}
                className={`${styles.headerItem} ${classNames.headerItem}`}
                style={style.headerItem}
                onClick={() => sortList(item.dataKey)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
        <div
          className={`${styles.tableContent} ${classNames.tableContent}`}
          style={style.tableContent}
        >
          {[...filteredSuggestions]
            .sort(
              (a, b) =>
                (selectedList?.includes(b.id) ? 1 : 0) -
                (selectedList?.includes(a.id) ? 1 : 0)
            )
            .map((item, index) => (
              <ListItem
                key={`listItem__${index}`}
                item={item}
                idx={item.id}
                isSelectable={isSelectable}
                isSelected={selectedList.includes(item.id)}
                onSelectItem={onSelectItem}
                excludedKeys={excludedKeys}
                onClickItem={onClickItem}
                classNames={{
                  tableRow: classNames.tableRow,
                  tableData: classNames.tableData,
                  checkbox: classNames.checkbox,
                  isactive: classNames.isactive,
                  tableCheckBox: classNames.tableCheckBox,
                }}
                style={style}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
