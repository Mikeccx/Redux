import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Hello from './Components/Hello'
import {HelloRedux} from './Components/Hello'
import { Provider } from 'react-redux'
import store from './store'
import Api from './dao/api'
function App() {
    useEffect(() => {
        Api.fetchList()
    }, [])
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/index' element={<Hello/>}></Route>
                {/* <Route path='/index1' element={<HelloClass/>}></Route> */}
                <Route path="/" element={<Navigate to="/index" replace />} />
            </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
