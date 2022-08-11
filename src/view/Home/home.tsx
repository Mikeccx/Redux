import './index.less'
import List from '../../components/list/list'
// import ListClass from '../../components/list/list_class'
import { useEffect, useState } from 'react'
import { memo } from 'react'
export default function Home() {
    const [a, setA] = useState(0)
    const test = memo(function test() {
        console.log('请进')
        return <span>1222</span>
    })
    return (
        <div className="home-wraper">
            {
                test()
            }
            <button onClick={()=>setA(2)}>改变</button>
            <List/>
        </div>
    )
}