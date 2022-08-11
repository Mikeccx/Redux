import './index.less'
import { useState } from 'react'
import {Checkbox} from '@ones-design/core'
const PageItem = (props: any) => {
    const { selectOp } = props
    const { name, uuid } = props.info
    // 设置选中的卡片
    const cb = (e: any) => {
        setCheck(!isChecked)
    }
    let [isChecked, setCheck] = useState(false)
    // 选中卡片
    const selectCard = () => {
        if (!isChecked) {
            selectOp(uuid, 'ADD')
        } else {
            selectOp(uuid, 'DEL')
        }
        setCheck(!isChecked)
    }
    return (
        <>
            <div className='item-wraper' onClick={() => selectCard()}>
                <div className='info'>
                    <div>
                        <div className='title'>{name}</div>
                        <div className='title'>{uuid}</div>
                    </div>
                    <Checkbox onChange={(e) => cb(e)} checked={isChecked}>
                    </Checkbox>
                </div>
                <div className=''>
                </div>
            </div>
        </>
    )
}
export default PageItem