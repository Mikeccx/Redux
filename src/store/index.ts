import { createStore } from 'redux'
import { reducer } from './reducer'
export default createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())