import React, {useEffect, useRef, useState} from 'react'
import styles from "./Home.module.scss"
import { UseOnDataFromIpcMain } from '../../hooks/UseOnDataFromIpcMain';
import { 
  AllRecordState,
  ChartDataState,
  ChartLengthState,
  ConfigValueState,
  DirectoryValueState
} from '../../Components/Recoil/Atoms';
import { useSetRecoilState } from 'recoil';
import IntensityChart from '../../Components/IntensityChart/IntensityChart';
import AreaChart from '../../Components/AreaChart/AreaChart';
import ImagesSwiper from '../../Components/ImagesSwiper/ImagesSwiper';


function Home() {

  const setAllRecord = useSetRecoilState(AllRecordState);
  const setChartData = useSetRecoilState(ChartDataState);
  const setChartLength = useSetRecoilState(ChartLengthState);
  const setDirectoryValue = useSetRecoilState(DirectoryValueState)
  const setConfigValue = useSetRecoilState(ConfigValueState)
  
  UseOnDataFromIpcMain(
    "readAccuracyXml_chanel",
    (event, data) => {
      if (data.status) {
        setAllRecord(data.data.allRecord)
        setChartLength(data.data.chartLength)
        setChartData(data.data.chartData)
        setDirectoryValue(data.data.directory)
        setConfigValue(data.data.config)
      }
    }
  );

  useEffect(() => {
    window.api_electron.readAccuracyXml()
    window.onload = document.documentElement.scrollTo({top: 0})
  }, [])
  
  return (
    <div className={styles.mainContainer}>
      <div style={{height: "60px"}}/>
      <div className={styles.main}>
        <IntensityChart />
        <AreaChart />
        <ImagesSwiper />
      </div>
    </div>
  )
}


export default Home;
