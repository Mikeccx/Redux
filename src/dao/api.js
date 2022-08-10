import axios from 'axios'
// 请求的实现
class Api {
    constructor(){}
    fetchList() {
        return axios.get('https://mock.apifox.cn/m1/1432113-0-default/list')
    }
    addItem() {
        return axios.post('https://mock.apifox.cn/m1/1432113-0-default/add')
    }
    deleteItem() {
        return axios.post('https://mock.apifox.cn/m1/1432113-0-default/del')
    }
}

export default new Api()

