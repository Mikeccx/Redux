import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './view/Home/home'
import './App.css'
// enum D {
//     up,
//     down,
//     left,
//     right
// }
// console.log('D: ', D)
// const testEum = (type: any) => {
//     console.log('enum: ', D.down === type)
//     switch(type) {
//         case D.up: console.log('hello, up');break;
//         case D.right: console.log('hello, down');break;
//         default: break;
//     }
// }
// testEum(1)
function App() {
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
