import React, { useEffect, useRef } from 'react';
import styles from "./DirectoryForm.module.scss";
import Button from '../Common/Button/Button';
import { 
  AreaChartValueSelected, 
  AreaFilterState, 
  ConfigValueState, 
  FilesPathState, 
  IdealPointMatris, 
  IntensityChartValueSelected, 
  IntensityFilterState, 
  PointSelectedData, 
  ProgressState 
} from '../Recoil/Atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { UseOnDataFromIpcMain } from '../../hooks/UseOnDataFromIpcMain';
import Range from '../Common/Range/Range';

function DirectoryForm({setIsModalOpen}) {

  const interval = useRef(null)
  const [configValue, setConfigValue] = useRecoilState(ConfigValueState)
  const [progress, setProgress] = useRecoilState(ProgressState)
  const resetAreaChartValueSelected = useResetRecoilState(AreaChartValueSelected)
  const resetIntensityChartValueSelected = useResetRecoilState(IntensityChartValueSelected)
  const resetPointSelectedData = useResetRecoilState(PointSelectedData)
  const resetIdealPointMatris = useResetRecoilState(IdealPointMatris);
  const resetFiltersArea = useResetRecoilState(AreaFilterState)
  const resetFiltersIntensity = useResetRecoilState(IntensityFilterState)
  const restFilesPath = useResetRecoilState(FilesPathState)

  UseOnDataFromIpcMain("getChartData_chanel", (event, data) => {
    // console.log(data)
  })
  
  const submitHandler = () => {
    setProgress(0)
    resetAreaChartValueSelected()
    resetIntensityChartValueSelected()
    resetPointSelectedData()
    resetIdealPointMatris()
    resetFiltersArea()
    resetFiltersIntensity()
    restFilesPath()
    document.documentElement.scrollTo({top: 0, behavior: "smooth"})
    interval.current = setInterval(() => {
      window.api_electron.loading()
    } , 500)
    window.api_electron.getChartData(configValue)
  }

  UseOnDataFromIpcMain("loading_chanel", (event, data) => {
    // console.log(data)
    setProgress(data)
    if (data >= 100) {
      clearInterval(interval.current)
      setIsModalOpen(false)
      window.api_electron.redConfusion()
      window.api_electron.moveMash2DHVFile()
    }
  })

  const directoryInput = [
    {label: "آدرس پوشه‌ی فایل آفلاین خوب", type: "healthyDir"},
    {label: "آدرس پوشه‌ی فایل آفلاین بد",  type: "nonHealthyDir"}
  ]
  
  const rangeInput = [
    {label: "حداقل سهم خرابی در دوربین بالا", type: "influenceTop"},
    {label: "حداقل سهم خرابی در دوربین پایین", type: "influenceDown"}
  ]

  useEffect(() => {
    window.api_electron.getChartData(configValue)

  } , [])

  return (
    <div className={styles.formContainer}>
      <h3> انتخاب فهرست </h3>

      {directoryInput.map(item =>
        <div key={item.type} className={styles.directory}>
          <label>{item.label}</label>
          <div className={styles.selectDirectoryBox}>
            <Button
              icon='box-arrow-in-down'
              expand='equilateral'
              fill='info'
              color='gray'
              iconWidth="1.6rem"
              iconHeight="1.6rem"
              onClick={() => {
                  window.api_electron.selectedPath().then(res => setConfigValue({...configValue, [item.type]: res}))
              }}
              classNames={{
                  container: styles.selectDirBtn
              }}
            />
            <input 
              type='text'
              placeholder='انتخاب فهرست...'
              value={configValue[item.type]}
              className={styles.searchRecord}
              disabled
            />
          </div>
        </div>
      )}

      {rangeInput.map(item => 
        <Range
          key={item.type}
          label={item.label}
          min={0}
          max={1}
          step={0.1}
          value={configValue[item.type]}
          onChange={(e) => setConfigValue({...configValue, [item.type]: e.target.value})}
        />
      )}


      <div className={progress < 100 ? styles.submitBtn : styles.submitBtnProgress} onClick={progress === 100 ? submitHandler : console.log}>
        <span style={{fontSize: progress < 100 ? "1.5rem" : "1rem"}}>{progress < 100 ? `%${progress}` : "دریافت اطلاعات"}</span>
        <div 
          className={styles.progress} 
          style={{width: `${progress}%`}}
        >
        </div>
      </div>

      {/* <Button
        title={progress < 100 ? `% ${progress}` : "دریافت اطلاعات"}
        expand='block'
        shape="round"
        fill='basic'
        color='primary'
        iconWidth="1.6rem"
        iconHeight="1.6rem"
        loading={progress < 100}
        onClick={submitHandler}
        classNames={{
            container: styles.submitBtn
        }}
      /> */}
    </div>
  )
}

export default DirectoryForm

