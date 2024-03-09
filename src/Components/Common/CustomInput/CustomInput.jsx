// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useRef } from "react";

import styles from "./CustomInput.module.scss";

const CustomInput = ({
  label,
  placeHolder,
  value = "",
  fieldType="text",
  disable = false,
  isRequired,
  onChange,
  onChangeValidator,
  onBlur,
  onBlurValidator,
  maxLength,
  minLength,
  className,
  classNames = { container: {}, input: {}, prefix: {}, suffix: {} },
  style = { container: {}, label: {}, input: {}, prefix: {}, suffix: {} },
  resetFlag = 0,
  prefix= "",
  suffix= ""
}) => {
  const [inputValue, setInputValue] = useState(value);
  const onChangeValue = (value) => {
    if (!onChangeValidator || onChangeValidator(value)) {
      if (onChange) {
        onChange(value);
      }
      setInputValue(value);
    }
  };
  const inputRef = useRef();
  const onBlurInput = (value) => {
    if (onBlur) {
      if (onBlurValidator) {
        onBlur(value)
        onBlurValidator(value);
        //TODO add hasError
      } else {
        onBlur(value);
      }
    }
  };
  useEffect(() => {
    if(value !==inputValue)
      setInputValue(value);
  }, [value])


  useEffect(() => {
    if(resetFlag > 0) inputRef.current.value = "";
  }, [resetFlag]);

  return (
    <div className={`${styles.Container} ${className} ${classNames?.container}`} style={style.container}>
      {label && (
        <div className={styles.label} style={style.label}>
          <p className={isRequired ? styles.labelRequired : ""}>{label}</p>
        </div>
      )}
      <div className={styles.inputContainer}>
        {prefix && <span className={`${styles.prefix} ${classNames?.prefix}`} style={style.prefix}>{prefix}</span>}
        <input
          ref={inputRef}
          className={`${styles.input} ${classNames?.input} ${prefix && styles.havePerfix} ${suffix && styles.haveSuffix}`}
          value={inputValue}
          type={fieldType}
          disabled={disable}
          placeholder={placeHolder}
          onChange={(e) => onChangeValue(e.target.value)}
          onBlur={(e) => onBlurInput(e.target.value)}
          maxLength={maxLength ? maxLength : -1}
          minLength={minLength ? minLength : -1}
          style={style.input}
        />
        {suffix && <span className={`${styles.suffix} ${classNames?.suffix}`} style={style.suffix}>{suffix}</span>}
      </div>
    </div>
  );
};

export default CustomInput;
