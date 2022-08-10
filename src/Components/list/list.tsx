import './index.less'
import { getList } from '../../dao/selector'
import { useSelector } from 'react-redux'
import PageItem from '../page_item/page_item'
import { Button } from '@ones-design/core'
import { useState } from 'react'
export default function List(props: any) {
    // 列表
    const list = useSelector(getList)
    // 选中列表
    const [selectList, setSelect]: any = useState([])
    // 选中或取消操作
    const selectOp = (uuid: string, type: any) => {
        if (type === 'ADD') {
            setSelect([...selectList, uuid])
        } else {
            const index = selectList.indexOf(uuid)
            const nA = [...selectList]
            nA.splice(index, 1)
            if (index > -1) {
                setSelect(nA)
            }

        }
    }
    return (
        <>
            <div className='op-wraper'>
                <Button>删除</Button>
                <Button>新增</Button>
            </div>
            <div className='list-wraper'>
                {
                    list.map((item: any) => <PageItem key={item.uuid} info={item} selectOp = {selectOp}/>)
                }
            </div>
        </>
    )
}