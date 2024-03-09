import React from "react";

import TitleCard from "../TitleCard/TitleCard";

import styles from "./Card.module.scss";
function Card({
  forwardRef,
  title = undefined,
  id = undefined,
  customHeader = undefined,
  customFooter = undefined,
  className = undefined,
  onScroll=undefined,
  classNames = { Container: "", title: "", childrenContainer: "" },
  style = { Container: {}, title: {}, childrenContainer: {} },
  children = undefined,
  ...props
}) {
  return (
    <div
      className={
        `${styles.Container} ${className ? className : ""} ${classNames.Container}`}
      style={style.Container}
    >
      {customHeader && customHeader}
      {!customHeader && title && (
        <TitleCard
          title={title}
          className={`${styles.title} ${classNames.title}`}
          style={style.title}
        />
      )}
      {children && (
        <div
          className={`${styles.childrenContainer} ${classNames.childrenContainer}`}
          style={style.childrenContainer}
          onScroll = {onScroll}
          id = {id}
          ref={forwardRef}
        >
          {children.lenght > 1
            ? children.map((child) => <>{child}</>)
            : children}
        </div>
      )}
      {customFooter && customFooter}
    </div>
  );
}

export default Card;
