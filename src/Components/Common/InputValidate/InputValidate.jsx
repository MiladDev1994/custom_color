import React, { useEffect, useState, useRef } from 'react'
import style from "./InputValidate.module.scss";
import Button from '../Button/Button';

const InputValidate = (props) => {

    const {label, value, focus, error, type, act, onChange, onFocus, onBlur, isValid, classNames, styles} = props;
    const [valueIn, setValueIn] = useState("")
    const [focusIn, setFocusIn] = useState(false)
    const [errorIn, setErrorIn] = useState("")
    const [actIn, setActIn] = useState(false);
    const [typeIn, setTypeIn] = useState("text")
    const inputRef = useRef(null)

    const changeHandler = (e) => {
        if (onChange) onChange(e);
        setValueIn(e.target.value);
    }
    
    const focusHandler = (e) => {
        if (onFocus) onFocus(e);
        setFocusIn(true);
    }

    const blurHandler = (e) => {
        if (onBlur) onBlur(e);
        setFocusIn(false);
        setActIn(true)
    }

    const showPasHandler = (e) => {
        e.preventDefault();
        typeIn === "password" ? setTypeIn("text") : setTypeIn("password")
    }


    useEffect(() => {
        if(value) setValueIn(value)
        if(focus) setFocusIn(focus)
        if(error !== undefined) setErrorIn(error)
        if(act !== undefined) setActIn(act)
    } , [props])

    useEffect(() => {
        if(isValid) isValid(valueIn, label);
    }, [valueIn])

    useEffect(() => {
        if(type) setTypeIn(type)
    } , [])


    return (
        <div 
            className={`${style.container}${classNames?.container ? " " + classNames.container : ""}`}
            style={styles?.container}
        >
            <label 
                onClick={() => inputRef.current.focus()}
                className={`
                    ${
                        (focusIn || valueIn) ? 
                            (errorIn && actIn) ? 
                            style.labelActiveError : 
                            style.labelActive : ""
                    }${
                        classNames?.label ? " " + classNames.label : ""
                    }`
                }
                style={styles?.label}
            >
                {label?.replaceAll("_", " ")}
            </label>

            <input 
                ref={inputRef}
                type={typeIn} 
                name={label}
                value={valueIn}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
                className={`
                    ${
                        (errorIn && actIn) ? style.inputError : ""
                    }${
                        classNames?.input ? " " + classNames?.input : ""
                    }`
                } 
                style={styles?.input}
            />

            {type === "password" &&
                <Button
                    shape='pill'
                    expand='block'
                    color='gray'
                    fill='transparent'
                    icon={typeIn === "password" ? "eye-line" : "eye-slash"}
                    iconWidth="1.4rem"
                    iconHeight="1.4rem"
                    onClick={showPasHandler}
                    classNames={{
                        container: style.changeType
                    }}
                />
            }

            {(errorIn && actIn) && <span
                className={`${classNames?.error ? " " + classNames?.error : ""}`}
                style={styles?.error}
            >{errorIn}</span>}

        </div>
    )
}

// InputValidate.defaultProps = InputDefaultProps;
export default InputValidate;