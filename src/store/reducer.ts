import { combineReducers } from 'redux'
const reducer1 = (state: any = {
    num: 1,
    list: [
        {
            uuid: 1,
            title: '测试1',
            img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'
        },
        {
            uuid: 2,
            title: '测试2',
            img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'

        },
        {
            uuid: 3,
            title: '测试3',
            img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'

        },
        {
            uuid: 4,
            title: '测试4',
            img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'

        }
    ]
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


