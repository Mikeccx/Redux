import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Api from './dao/api'
import Home from './view/Home/home'
import './App.css'
function App() {
    useEffect(() => {
        Api.fetchList()
    }, [])
  return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/index' element={<Home/>}></Route>
                    {/* <Route path='/index1' element={<HelloClass/>}></Route> */}
                    <Route path="/" element={<Navigate to="/index" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
  );
}

export default App;
