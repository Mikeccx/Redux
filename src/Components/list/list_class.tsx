import React from 'react'
import './index.less'
import { Button, Modal, Input } from '@ones-design/core'
import { getListThunkAction, delItemThunkAction, addItemThunkAction } from '../../dao/actions'
import { connect } from 'react-redux'
import PageItem from '../page_item/page_item'
interface listState {
    modalVisible: boolean,
    addModalVisible: boolean,
    list?: any [],
    name?: string,
    selectArr: any []
}
class ListClass extends React.Component<any> {
    state: Readonly<listState> = {
        modalVisible: false,
        addModalVisible: false,
        name: '',
        selectArr: []
    }
    componentDidMount() {
        const { getList } = this.props
        getList()
    }
    // 切换弹窗状态
    toggleModalVisible = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    // 切换弹窗状态
    toggleAddModalVisible = () => {
        this.setState({
            addModalVisible: !this.state.addModalVisible
        })
    }
    // 选中或取消操作
    selectOp = (uuid: string, type: any) => {
        if (type === 'ADD') {
            this.setState({
                selectArr: [...this.state.selectArr, uuid]
            })
        } else {
            const index = this.state.selectArr.indexOf(uuid)
            const nA = [...this.state.selectArr]
            nA.splice(index, 1)
            if (index > -1) {
                this.setState({
                    selectArr: nA
                })
            }
        }
    }
    addItem = () => {
        this.props.addItem(this.state.name)
        this.setState({
            addModalVisible: false
        })
    }
    deleteItem = () => {
        this.props.delItem(this.state.selectArr)
        this.setState({
            modalVisible: false
        })
    }
    render(): React.ReactNode {
        return (
            <>
                {
                    this.state.modalVisible ? 
                    <Modal
                        closable
                        onCancel={() => this.toggleModalVisible()}
                        onMaximizeChange={function noRefCheck(){}}
                        onOk={() => this.deleteItem()}
                        title="提示"
                        visible
                        width={520}
                        >
                        是否删除？
                    </Modal> : null
                }
                {
                    this.state.addModalVisible ? 
                    <Modal
                        closable
                        onCancel={() => this.setState({
                            ...this.setState,
                            addModalVisible: false
                        })}
                        onMaximizeChange={function noRefCheck(){}}
                        onOk={() => this.addItem()}
                        title="提示"
                        visible
                        width={520}
                        >
                        <Input
                            onChange={(e: any) => {this.setState({
                                ...this.state,
                                name: e.target.value
                            }) }}
                            onPressEnter={() => {}}
                            placeholder="Input 输入框"
                        />
                    </Modal> : null
                }
                <div className='op-wraper'>
                    <Button onClick={() => this.toggleModalVisible()}>删除</Button>
                    <Button onClick={() => this.toggleAddModalVisible()}>新增</Button>
                </div>
                <div className='list-wraper'>
                    {
                        this.props?.list?.map((item: any) => <PageItem key={item.uuid} info={item} selectOp = {this.selectOp}/>)
                    }
                </div>
            </>
        )
    }
}


// store props映射
const mapStateToProps = (state: any, props: any) => {
    return ({
    list: state?.wikiList?.list || [],
    ...props
})
}
// store dispatch映射
const dispatchToProps = (dispatch: any) => {
    return {
        addItem: (name: string) => dispatch(addItemThunkAction(name)),
        getList: () => dispatch(getListThunkAction()),
        delItem: (id: string) => dispatch(delItemThunkAction(id))
    }
}
export default connect(mapStateToProps, dispatchToProps)(ListClass)