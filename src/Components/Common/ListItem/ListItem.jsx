// @ts-nocheck
import React from "react";

import styles from "../List/List.module.scss";

const ListItem = ({
  item,
  idx,
  isSelectable,
  isSelected,
  onSelectItem,
  excludedKeys,
  onClickItem,
  classNames = { tableRow: "", tableData: "", checkbox: "", isactive: "", tableCheckBox: "" },
  style = { tableRow: {}, tableData: {}, checkbox: {}, isactive: {}, tableCheckBox: {} },
}) => {
  const keys = Object.keys(item).filter(
    (key) => excludedKeys.indexOf(key) === -1
  );
  return (
    <div
      className={`${styles.tableRow} ${classNames.tableRow}`}
      style={style.tableRow}
      onClick={() => {
        onClickItem(item.id);
        if (isSelectable) {
          onSelectItem(item.id);
        }
      }}
    >
      {isSelectable && (
        <div
          className={`${styles.tableCheckBox} ${classNames.tableCheckBox}`}
          style={style.tableCheckBox}
        >
          <div
            className={`${styles.checkbox} ${classNames.checkbox} 
            ${isSelected ? styles.isactive : ""}
            ${isSelected ? classNames.isactive : ""}
            `}
            style={style.checkbox}
          />
        </div>
      )}

      {keys.map((key, index) => (
        <div
          key={`item${idx}_${key}_${index}`}
          className={`${styles.tableData} ${classNames.tableData}`}
          style={style.tableData}
        >
          {item[key]}
        </div>
      ))}
    </div>
  );
};

export default ListItem;
