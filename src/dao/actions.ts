

// 主要声明操作内容，没有实现
export const actionMap = {
    add: (payload: any) => ({
        type: 'ADD',
        payload
    }),
    delete: (payload: any) => ({
        type: 'DELETE',
        payload
    }),
    update: (payload: any) => ({
        type: 'UPDATE',
        payload
    })
}