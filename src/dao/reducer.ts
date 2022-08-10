export const wikiList = (state: any = {
    list: [
        // {
        //     uuid: 1,
        //     title: '测试1',
        //     img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'
        // },
        // {
        //     uuid: 2,
        //     title: '测试2',
        //     img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'

        // },
        // {
        //     uuid: 3,
        //     title: '测试3',
        //     img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'

        // },
        // {
        //     uuid: 4,
        //     title: '测试4',
        //     img: 'https://ones.cn/project/images/cc0e975404ebc8ef66e28100ca8bd4ba.png'

        // }
    ]
}, action: any) => {
    const { payload } = action
    console.log('type: ', action.type)
    console.log('payload: ', payload)
    switch(action.type) {
        case 'ADD': 
        let nArr1 = [...state.list]
        nArr1.push({uuid: +new Date(), name: payload})
        return {
            list: nArr1
        }
        case 'DELETE':
        const index = state.list.findIndex((item: any) => item.uuid === payload)
        let nArr = [...state.list]
        if (index > -1) {
            nArr.splice(index, 1)
        }
        return {
            list: nArr
        }
        case 'GET': return {
            list: payload
            // list: []
        }
        default: return state
    }
}