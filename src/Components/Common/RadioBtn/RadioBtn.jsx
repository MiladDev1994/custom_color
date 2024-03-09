import React from "react";
import Icon from "../Icon/Icon";
import palletIcon from "../../Styles/pallet";
import styles from "./RadioBtn.module.scss";
const RadioBtn = ({
  label = "radio button",
  value,
  isSelected = false,
  onToggleSelected = () => {},
  selectedColor = palletIcon.colorWhite,
  selectedBackground = "#4DA9E4",
  customItem,
  classNames = { container:"", icon:"", notSelected:"", label:"" },
}) => {
  return (
    <div
      className={`${styles.container}${
        classNames.container ? " " + classNames.container : ""
      }`}
      onClick={() => onToggleSelected(!isSelected, value)}
    >
      {isSelected ? (
        <Icon
          width="1.5em"
          height="1.5em"
          name="tickAccept"
          color={selectedColor}
          background={selectedBackground}
          className={classNames.label ?? ""}
          isCircle
        />
      ) : (
        <div className={`${styles.notSelected}${
            classNames.notSelected ? " " + classNames.notSelected : ""
          }`} />
      )}
      {customItem ?
        customItem :
        <p className={`${styles.label}${
          classNames.label ? " " + classNames.label : ""
        }`}>{label}</p>
      }
    </div>
  );
};

export default RadioBtn;
