import React, { useEffect, useState } from "react"
import styles from "./IntensityChart.module.scss"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { AllRecordState, AreaFilterState, ChartDataState, ChartLengthState, FilesPathState, IntensityChartValueSelected, IntensityFilterState, PointSelectedData } from "../Recoil/Atoms"
import SingleScatterChart from "../Common/Charts/SingleScatterChart"
import ZoomChart from "../Common/ZoomChart/ZoomChart"
import StepButton from "../Common/StepButton/StepButton"
import Matris from "../Common/Matris/Matris"
import { chartTheme } from "../../Pages/Home/Theme"
import { AccuracyLineByStepUtil } from "../../Utils/Front/LineByStepUtils"
import { changeStepByKeyUtil } from "../../Utils/Front/changeStepByKeyUtil"
import { showHideChartUtil } from "../../Utils/Front/showHideChartUtil"



const IntensityChart = () => {
  
    const allRecord = useRecoilValue(AllRecordState)
    const chartData = useRecoilValue(ChartDataState)
    const chartLength = useRecoilValue(ChartLengthState)
    const [filtersIntensity, setFiltersIntensity] = useRecoilState(IntensityFilterState)
    const [filtersArea, setFiltersArea] = useRecoilState(AreaFilterState)
    const [chartValueSelected, setChartValueSelected] = useRecoilState(IntensityChartValueSelected)
    const [pointSelectedData, setPointSelectedData] = useRecoilState(PointSelectedData)
    const filesPath = useResetRecoilState(FilesPathState)
    
    const [chartUpdateCount, setChartUpdateCount] = useState(0);
    const [chartSize, steChartSize] = useState({});
    const [clicked, setClicked] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [lineTypeToDraw, setLineTypeToDraw] = useState(0);
    const [goodDirection, setGoodDirection] = useState(0);
    const [chartAnimation, setChartAnimation] = useState(true)
    const [chartZoom, setChartZoom] = useState({
      min: 1,
      max: 1,
    })
    const verticalLinesValue = Number(filtersIntensity[activeIndex]?.data?.verticalLines?.join("")).toFixed(0);
  
    const e_structure = [
      {type: "e4", nickname: "LabelPositive", title: "دقت بار خوب", style: "sum"},
      {type: "e1", nickname: "FN", title: "بار خوب رد شده", style: "danger_dashed"},
      {type: "e0", nickname: "TP", title: "بار خوب قبول شده", style: "success"},
      {type: "e5", nickname: "LabelNegative", title: "دقت بار بد", style: "sum"},
      {type: "e3", nickname: "TN", title: "بار بد رد شده", style: "success_dashed"},
      {type: "e2", nickname: "FP", title: "بار بد قبول شده", style: "danger"},
      {type: "e8", nickname: "Accuracy", title: "مجموع دقت", style: "sumAccuracy"},
      {type: "e7", nickname: "PredictionNegative", title: "دقت رد شده", style: "sum"},
      {type: "e6", nickname: "PredictionPositive", title: "دقت قبول شده", style: "sum"},
    ]
  
    const setAccuracyLinesHandler = (lineType, canvasPos, getLines) => {
      const lines = getLines.join("") >= chartLength ? [chartLength] : getLines
      let tempFilter = { ...filtersIntensity?.[activeIndex] };
      tempFilter.data = { ...tempFilter.data };
      if (lineType === 0) {
        tempFilter.data.verticalLines = lines;
        tempFilter.data.verticalLinesCanvasPos = canvasPos;
      } else if (lineType === 1) {
        tempFilter.data.extendedLines = [];
        tempFilter.data.extendedLinesCanvasPos = [];
        tempFilter.data.horizontalLine = lines;
        tempFilter.data.horizontalLineCanvasPos = canvasPos;
      } else if (lineType === 2) {
        tempFilter.data.horizontalLine = undefined;
        tempFilter.data.horizontalLineCanvasPos = undefined;
        if (
          tempFilter?.data?.extendedLines === undefined ||
          tempFilter.data.extendedLines?.length >= 1
        ) {
          tempFilter.data.extendedLines = [];
          tempFilter.data.extendedLinesCanvasPos = [];
        } else {
          tempFilter.data.extendedLines = [
            ...tempFilter.data.extendedLines,
          ];
          tempFilter.data.extendedLinesCanvasPos = [
            ...tempFilter.data.extendedLinesCanvasPos,
          ];
        }
        tempFilter.data.extendedLines.push(lines);
        tempFilter.data.extendedLinesCanvasPos.push(canvasPos);
      } else if (lineType === 3) {
        tempFilter.data.horizontalLine = undefined;
        tempFilter.data.horizontalLineCanvasPos = undefined;
        tempFilter.data.extendedLines = lines;
        tempFilter.data.extendedLinesCanvasPos = canvasPos;
      }
      let tempFilters = [...filtersIntensity];
      tempFilters[activeIndex] = tempFilter;
      if (tempFilters.length) {
        const findXmlData = allRecord.find(item => Math.round(+item.id * 100) === Math.round(Number(lines)))
  
        let numsHIndex = -1;
        let numsNHIndex = -1;
        const numsH = findXmlData?.opencv_storage?.numsH?.data.replaceAll("\n", "").split(" ").map((item) => {
          if (item) {
            numsHIndex++
            return {
              id: numsHIndex, 
              value: Number(item)
            }
          }
        }).filter(item => item !== undefined) || []
        const numsNH = findXmlData?.opencv_storage?.numsNH?.data.replaceAll("\n", "").split(" ").map((item) => {
          if (item) {
            numsNHIndex++
            return {
              id: numsNHIndex, 
              value: Number(item)
            }
          }
        }).filter(item => item !== undefined) || []
  
        setPointSelectedData({
          ...pointSelectedData,
          ...findXmlData?.opencv_storage,
          numsH,
          numsNH,
          numsLength: numsH.length
        })
  
      }
      setFiltersIntensity(tempFilters);
      setChartUpdateCount(chartUpdateCount + 1);
    }
  
    const stepData = {
      chartValueSelected,
      setChartValueSelected,
      message: "ابتدا یک فهرست انخاب کنید",
      filters: filtersIntensity,
      verticalLinesValue,
      allRecord: allRecord,
      chartLength: chartLength,
      chartSize,
      percent: 100,
      setAccuracyLinesHandler,
      chartData,
    }
  
    useEffect(() => {
      const createHorizontalData = {
        ...chartTheme.public, 
        ...chartTheme["e8"],
        data: chartData["e8"],
      }
      Object.keys(chartData).length && setChartValueSelected([createHorizontalData])
    } , [chartData])
    
    useEffect(() => {
      if (filtersIntensity.length) {
        AccuracyLineByStepUtil({...stepData, type: "default"})
      }
    }, [clicked])
  
    useEffect(() => {
      const newChartValueSelected = chartValueSelected.filter(item => !item.label.includes("ideal"));
      setChartValueSelected(newChartValueSelected)
      setFiltersArea([])
      filesPath()
    } , [filtersIntensity])
    
  
    return (
      <div className={styles.chartBox} tabIndex={0} onKeyDown={(e) => changeStepByKeyUtil(e, stepData)}>
        <div className={styles.descriptionBox}>
          <Matris
            data={e_structure}
            charts={chartValueSelected}
            pointSelected={pointSelectedData}
            // name="نقاط پیشفرض"
            onClick={(nickname, type) => showHideChartUtil({
              ...stepData, 
              nickname, 
              type,
              message: "ابتدا یک فهرست انخاب کنید",
            })
            }
          />
          <div className={styles.actionBox}>
            <StepButton
              description="دلتا"
              onClick={(types) => {
                AccuracyLineByStepUtil({...stepData, type: types})
              }}
              title={isNaN(verticalLinesValue) ? "---" : verticalLinesValue}
            />
          </div>
        </div>
        <div className={styles.chart}>
          {chartValueSelected.length ?
            <SingleScatterChart
              chartKey={filtersIntensity[activeIndex]?.chartKey}
              labels={chartLength ? [...Array(Math.ceil(chartLength * 1.02)).keys()] : []}
              datas={chartValueSelected}
              lineTypeToDraw={lineTypeToDraw}
              updateCount={chartUpdateCount}
              // setUpdateCount={setChartUpdateCount}
              goodDirection={goodDirection}
              setLines={setAccuracyLinesHandler}
              verticalLines={filtersIntensity?.[activeIndex]?.data?.verticalLines}
              verticalLinesCanvasPos={
                filtersIntensity?.[activeIndex]?.data?.verticalLinesCanvasPos
              }
              horizontalLine={filtersIntensity?.[activeIndex]?.data?.horizontalLine}
              horizontalLineCanvasPos={
                filtersIntensity?.[activeIndex]?.data?.horizontalLineCanvasPos
              }
              extendedLines={filtersIntensity?.[activeIndex]?.data?.extendedLines}
              extendedLinesCanvasPos={
                filtersIntensity?.[activeIndex]?.data?.extendedLinesCanvasPos
              }
              steChartSize={steChartSize}
              setClicked={setClicked}
              animation={chartAnimation}
              clicked={clicked}
              allRecord={allRecord}
              Y={{
                min: 1 * chartZoom.min.toFixed(2),
                max: 1 * chartZoom.max.toFixed(2),
                // beginAtZero: true,
                ticks: {
                  // type: "logarithmic",
                  callback: (value, index, values) => {
                    return (Math.floor(value * 100) + "%")
                  },
                  // padding: 10,
                  font: {
                    family: "IranSans",
                  },
                  stepSize: 0.1,
                },
                title: {
                  display: true,
                  text: "دقت",
                  color: "#a7a7a7",
                  font: {
                    family: "IranSans",
                    size: 15
                  }
                }
              }}
              X={{
                ticks: {
                  font: {
                    family: "IranSans",
                  },
                },
                title: {
                  display: true,
                  text: "دلتا",
                  color: "#a7a7a7",
                  font: {
                    family: "IranSans",
                    size: 15
                  }
                }
              }}
              title="نمودار شدت خرابی"
            /> :
            <h1> هیچ فهرستی انتخاب نشده است !!!</h1>
          }
        </div>
        
        {!!chartValueSelected.length &&
          <div className={styles.zoomBox}>
            <ZoomChart
              chartHeight={chartSize.height}
              setZoom={setChartZoom}
              setAnimation={setChartAnimation}
              type="Percent"
              max={1}
            />
          </div>
        }
        
      </div>
    )
  }


  export default IntensityChart;