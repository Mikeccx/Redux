import { combineReducers } from 'redux'
const reducer1 = (state: any = {
    num: 1
}, action: any) => {
    switch(action.type) {
        case 'TEST_ADD': return { count: state.num + 0 }
        default: return state
    }
}

const reducer2 = (state: any = {
    count: 1
}, action: any) => {
    switch(action.type) {
        case 'TEST': return { count: state.count+0 }
        default: return state
    }
}
export const reducer = combineReducers({
    reducer1, reducer2
})


