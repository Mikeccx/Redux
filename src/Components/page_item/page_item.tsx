import './index.less'
import { useEffect, useState } from 'react'
import {Checkbox} from '@ones-design/core'
const PageItem = (props: any) => {
    const { selectOp } = props
    const { title, img, uuid } = props.info
    const cb = (e: any) => {
        setCheck(!isChecked)
    }
    let [isChecked, setCheck] = useState(false)
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
                    <span className='title'>{title}</span>
                    <img className='avatar' src={img}></img>
                </div>
                <div className=''>
                    <Checkbox onChange={(e) => cb(e)} checked={isChecked}>
                        多选框
                    </Checkbox>
                </div>
            </div>
        </>
    )
}
export default PageItem