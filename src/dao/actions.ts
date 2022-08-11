
import Api from './dao'
// 主要声明操作内容，没有实现
export const actionMap = {
    add: (payload: any) => ({
        type: 'ADD',
        payload
    }),
    delete: (payload?: any) => ({
        type: 'DELETE',
        payload
    }),
    update: (payload: any) => ({
        type: 'UPDATE',
        payload
    }),
    getList: (payload: any) => ({
        type: 'GET',
        payload
    })
}
// 包含异步操作的thunkaction
export const getListThunkAction = (payload?: any) => {
    return function(dispatch: any){
        return Api.fetchList().then((res: any) => {
            // let data =  {
            //     id: 1,
            //     spaces: res?.data?.data?.spaces
            // }
            // const normalizedRes = normalize(data, SpaceSchema)
            dispatch(actionMap.getList(res?.data?.data?.spaces))
        })
    }
}

export const delItemThunkAction = (payload: string) => {
    return function (dispatch: any) {
        return Api.deleteItem(payload).then((res: any) => {
            dispatch(actionMap.delete(payload))
        })
    }
}

export const addItemThunkAction = (payload: string) => {
    return function (dispatch: any) {
        return Api.addItem(payload).then((res: any) => {
            dispatch(actionMap.add(payload))
        })
    }
}
// export const getListThunkAction = (payload?: any) => {
//     return async (dispatch: any) => {
//         const res = await Api.fetchList()
//         const normalizedRes = normalize(res, SpaceSchema)
//         dispatch(actionMap.getList(normalizedRes))
//     }
// }