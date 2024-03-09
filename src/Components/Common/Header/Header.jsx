import React, { useState } from 'react'
import Button from '../Button/Button';
import styles from "./Header.module.scss"
import { UseOnDataFromIpcMain } from '../../../hooks/UseOnDataFromIpcMain';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AllRecordState, ChartDataState, ChartLengthState, DirectoryValueState, ProgressState } from "../../Recoil/Atoms"
import { Toast } from '../../../Utils/Front/Toast';
import Modal from '../Modal/Modal';
import DirectoryForm from '../../DirectoryForm/DirectoryForm';
import { Link } from 'react-router-dom';

function Header() {

    const setAllRecord = useSetRecoilState(AllRecordState)
    const setChartData = useSetRecoilState(ChartDataState)
    const setChartLength = useSetRecoilState(ChartLengthState)
    const setDirectoryValue = useSetRecoilState(DirectoryValueState)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const progress = useRecoilValue(ProgressState)


    UseOnDataFromIpcMain("redConfusion_chanel", (event, data) => {
        if (data.status) {
            Toast("success", data.message)
            setAllRecord(data.data.allRecord)
            setChartLength(data.data.chartLength)
            setChartData(data.data.chartData)
            setDirectoryValue(data.data.directory)
        } else {
            Toast("error", data.message)
        }
    })


    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={styles.windowBtnBox}>
                    <Button
                        icon='x'
                        expand='block'
                        fill='info'
                        shape="round"
                        color='danger'
                        iconWidth="2rem"
                        iconHeight="2rem"
                        onClick={() => {
                            window.api_electron.close()
                        }}
                        classNames={{
                            container: styles.windowBtn
                        }}
                    />
                    <Button
                        icon='dash'
                        expand='block'
                        fill='info'
                        shape="round"
                        color='primary'
                        iconWidth="2rem"
                        iconHeight="2rem"
                        onClick={() => {
                            window.api_electron.minimize()
                        }}
                        classNames={{
                            container: styles.windowBtn
                        }}
                    />
                </div>
                <Link to={"/"}>کاستوم کالر 2بعدی</Link>
                <div className={styles.formDirectory}>
                    <Button
                        title="انتخاب فهرست"
                        icon='box-arrow-in-down'
                        expand='full'
                        fill='info'
                        color='gray'
                        shape="round"
                        iconWidth="1.6rem"
                        iconHeight="1.6rem"
                        outlineColor="lightgray"
                        onClick={() => setIsModalOpen(!isModalOpen)} 
                        classNames={{
                            container: styles.submitBtn
                        }}
                    />
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                setIsOpen={progress >= 100 ? setIsModalOpen : console.log}
                classNames={{
                    bodyContainer: styles.modalContainer
                }}
            >
                <DirectoryForm
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            </Modal>
        </div>
    )
}

export default Header;