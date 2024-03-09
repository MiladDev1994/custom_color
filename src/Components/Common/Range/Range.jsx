import React, { useEffect, useRef, useState } from "react";
import styles from "./Range.module.scss"


const Range = (props) => {

    const {
        min = 0, 
        max = 100, 
        step = 1,
        label = "",
        value,
        onChange,
    } = props;

    const container = useRef(null)
    const [range, setRange] = useState([])
    const [divisible, setDivisible] = useState([])
    const rangeLength = Math.ceil((max - min) / step)
    const [rangeLengthShow, setRangeLengthShow] = useState(0)
    const [gap, setGap] = useState(1)
    const stepLength = String(step).includes(".") ? Number(String(step).split(".").pop().length) : 0;

    const rangeGenerator = () => {
        let index = 0;
        let value = min
        const data = []
        for (let i=min; i<=min+rangeLength; i++) {
            
            if (!index) data.push(i)
            else {
                const valueLength = Number(String(value).split(".").pop().length);
                const longer = valueLength > stepLength ? valueLength : stepLength
                const pow = Math.pow(10, longer)
                value = String(step).includes(".") ? (Math.round(value * pow) + (step * pow)) / pow : value + step
                data.push(value)
            } 
            index++;
        }

        return data;
    }

    const divisibleChecker = () => {
        const data = [];
        for (let i=2; i<=Math.floor((range.length - 1) / 2); i++) {
            if ((range.length - 1) % i === 0) data.push(i)
        }
        return data
    }
    
    useEffect(() => {
        setRange(rangeGenerator())
        setRangeLengthShow(Math.ceil(container.current.scrollWidth / 50))
    } , [props])

    useEffect(() => {
        setDivisible(divisibleChecker())
        const findSmallDivisible = divisible.filter(item => item <= rangeLengthShow)
        const findGap = findSmallDivisible.length && Math.max(...findSmallDivisible)
        
        setGap((range.length - 1) / findGap)
    } , [range])

    // useEffect(() => {
    //     const findSmallDivisible = divisible.filter(item => item <= rangeLengthShow)
    //     const findGap = findSmallDivisible.length && Math.max(...findSmallDivisible)
        
    //     setGap((range.length - 1) / findGap)
    // } , [divisible])
    

    return (
        <div ref={container} className={styles.container}>
            {label && <label>{label}</label>}
            
            <div className={styles.descriptionBox} style={{height: 0}}>
                {range.map((item) =>
                    <div key={item} className={styles.description}>
                        {item === +value ?
                            <div className={styles.bigLine}>
                                <div className={styles.inValue}>
                                    <span>
                                        %{value * 100}
                                    </span>
                                </div>
                            </div> : ""
                        }
                    </div> 
                )}
            </div>

            <input
                type='range'
                min={min}
                max={range.length ? [...range].pop() : max}
                step={step}
                value={value}
                onChange={onChange}
            />
  
            <div className={styles.descriptionBox} style={{height: "30px"}}>
                {range.map((item, index) =>
                    <div key={item} className={styles.descriptionDown}>
                        {index % gap === 0 ?
                            <>
                                <div className={styles.bigLine}/>
                                <div className={styles.values}>
                                    %{item.toFixed(stepLength) * 100}
                                </div>
                            </> :
                            <div className={styles.smallLine}/>
                        }
                    </div> 
                )}
            </div>

        </div>
    )
  }


  export default Range;