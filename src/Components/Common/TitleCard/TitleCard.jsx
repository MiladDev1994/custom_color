import React from "react";
import Icon from "../Icon/Icon";
import palletIcon from "../../Styles/pallet";
import styles from "./TitleCard.module.scss";
import { useNavigate } from "react-router-dom";

function TitleCard({
  title = undefined,
  children = undefined,
  className = undefined,
  hasBackBtn = false,
  style = {},
  customClick = undefined,
  ...props
}) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.Container} ${className ?? ""}`} style={style}>
      {title && !hasBackBtn && <h2>{title}</h2>}
      {title && hasBackBtn && (
        <div className={styles.backTitleContainer} onClick={() => {
          if(customClick){
            customClick()
          }else{
            navigate(-1)
          }
          }}>
          <div className={styles.icon}>
            <Icon name="arrowRight" color={palletIcon.colorBlackText} />
          </div>
          <h2>{title}</h2>
        </div>
      )}
      {children && children.length > 1
        ? children.map((child, index) => (
            <div key={`TitleCard_Child_${index}`}>{child}</div>
          ))
        : children}
    </div>
  );
}

export default TitleCard;
