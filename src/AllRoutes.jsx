import * as React from 'react';
import Header from "./Components/Common/Header/Header";
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function AllRoutes() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default AllRoutes;