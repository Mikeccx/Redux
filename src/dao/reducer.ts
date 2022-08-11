export const wikiList = (state: any = {
    list: []
}, action: any) => {
    const { payload } = action
    switch(action.type) {
        case 'ADD':
        let nArr1 = [...state.list]
        // 重新获取list
        nArr1.push({uuid: +new Date(), name: payload})
        return {
            list: nArr1
        }
        case 'DELETE':
        // 找出没有交集的
        return {
            list: state.list.filter((item: any) => {
                return !payload.includes(item.uuid)
            })
        }
        case 'GET': return {
            list: payload
        }
        default: return state
    }
}