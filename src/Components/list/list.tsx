import './index.less'
import { getList } from '../../dao/selector'
import { useSelector } from 'react-redux'
import PageItem from '../page_item/page_item'
import { Button, Modal, Input } from '@ones-design/core'
import { useEffect, useState, useMemo } from 'react'
import { getListThunkAction, delItemThunkAction, addItemThunkAction } from '../../dao/actions'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export default function List(props: any) {
    const dispatch = useAppDispatch()
    const [modalVisible, setModalVisible] = useState(false)
    const [addModalVisible, setaddModalVisible] = useState(false)
    const [name, setName] = useState('')

    const someThing = useMemo(() => {
        console.log('执行!')
        return modalVisible 
    }, [])
    // 列表
    const list = useSelector(getList)

    useEffect(() => {
        dispatch(getListThunkAction())
    }, [])

    // 操作头
    const headerRender = () => ( <div className='op-wraper'>
                <Button onClick={() => setModalVisible(true)}>删除</Button>
                <Button onClick={() => setaddModalVisible(true)}>新增</Button>
            </div>
    )
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
    // 删除
    const deleteItem = () => {
        dispatch(delItemThunkAction(selectList))
        setModalVisible(false)
    }
    // 新增
    const addItem = () => {
        dispatch(addItemThunkAction(name))
        setaddModalVisible(false)
    }
    return (
        <>
            {
                modalVisible ? 
                <Modal
                    closable
                    onCancel={() => setModalVisible(false)}
                    onMaximizeChange={function noRefCheck(){}}
                    onOk={() => deleteItem()}
                    title="提示"
                    visible
                    width={520}
                    >
                    是否删除？
                </Modal> : null
            }
            {
                addModalVisible ? 
                <Modal
                    closable
                    onCancel={() => setaddModalVisible(false)}
                    onMaximizeChange={function noRefCheck(){}}
                    onOk={() => addItem()}
                    title="提示"
                    visible
                    width={520}
                    >
                    <Input
                        onChange={(e: any) => {setName(e.target.value) }}
                        onPressEnter={function noRefCheck(){}}
                        placeholder="Input 输入框"
                    />
                </Modal> : null
            }
            {
                headerRender()
            }
            <div className='list-wraper'>
                {
                    list.map((item: any) => <PageItem key={item.uuid} info={item} selectOp = {selectOp}/>)
                }
            </div>
        </>
    )
}