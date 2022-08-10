import axios from 'axios'
// 请求的实现
class Api {
    constructor(){}
    fetchList() {
        return axios.post('/test')
    }
}

export default new Api()

