import { chartTheme } from "../../Pages/Home/Theme";
import { Toast } from "./Toast";

export const showHideChartUtil = (data) => {
    const {
        chartValueSelected,
        nickname,
        type,
        setChartValueSelected,
        chartData,
        message
    } = data
    if (!chartValueSelected.length) return Toast("error", message);

    const findChart = chartValueSelected.find(item => item.label.replaceAll(" ", "") === nickname)
    if (findChart) {
      const filterChartValueSelected = chartValueSelected.filter(item => item.label.replaceAll(" ", "") !== nickname)
      chartValueSelected.length > 1 && setChartValueSelected(filterChartValueSelected)
    } else {
      const newChartValueSelected = [...chartValueSelected];
      const createHorizontalData = {
        ...chartTheme.public, 
        ...chartTheme[type],
        data: chartData[type],
      }
      newChartValueSelected.push(createHorizontalData)
      setChartValueSelected(newChartValueSelected)
    }
}