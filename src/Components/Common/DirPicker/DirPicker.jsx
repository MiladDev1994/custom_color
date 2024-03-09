import React from "react";
import CustomInput from "../CustomInput/CustomInput";

import styles from "./DirPicker.module.scss";
import Button from "../Button/Button";
const DirPicker = ({ label, placeHolder = "Choose directory ...", isRequired=false, value, setValue }) => {
  const openSelectDir = () => {
    // api_electron.selectFolder().then(result => result ? setValue(result) : false)
    api_electron.selectedPath().then(result => result ? setValue(result) : false)
  };
  return (
    <div className={styles.container}>
      {label &&  <p className={
        isRequired ? styles.labelRequired : ""}>{label}</p>}
      <div className={styles.pickerContainer}>
        <Button
          title="انتخاب آدرس"
          onClick={openSelectDir}
          fill="info"
          color="gray"
          classNames={{
            container: styles.btn
          }}
        />
          
        <CustomInput
          isRequired
          classNames={{
            container: styles.customInputContainer,
            input: styles.input,
          }}
          placeHolder={placeHolder}
          value={value}
          disable
        />
      </div>
    </div>
  );
};

export default DirPicker;
