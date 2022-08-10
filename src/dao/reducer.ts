export const wikiList = (state: any = {
}, action: any) => {
    const { payload } = action
    switch(action.type) {
        case 'ADD': return {}
        case 'DELETE': return {}
        case 'GET': return {}
        default: return state
    }
}