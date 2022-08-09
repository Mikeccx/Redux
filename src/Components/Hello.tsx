import React, { useEffect, useRef, useState, startTransition } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createStore } from 'redux'
import { connect, MapDispatchToProps, MapStateToProps, useSelector, shallowEqual, useDispatch } from 'react-redux'
import store from '../store/index'
interface IHelloProps {
    message?: string
    children?: React.ReactNode
}

function withRouter(Child: any): any {
    // console.log('store: ', store.getState())
    return (props: any) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    }
}
const Hello: React.FC<IHelloProps> = (props: any) => {
    const dispatch = useDispatch()
    function selector(state: any) {
        // 每次比较这个返回的对象，默认===比较，增加shallowEqual，可以比较单层
        return {
            ...state.reducer1,
            ...state.reducer2
        }
    }
    const count = useSelector(selector, shallowEqual)
    // const count = useSelector((state: any) => state.reducer1.num)
    console.log(1, count)
    return (
        <>
            {/* <span>{count}</span> */}
            <button onClick={() => dispatch({ type: 'TEST' })}>更新</button>
        </>
    )
}
@withRouter
class HelloClassC extends React.Component {
    state: Readonly<{}> = {
    }
    componentDidMount() {
        console.log(1)
        console.log(this.props)
    }
    render(): React.ReactNode {
        return <span>1</span>
    }
}

Hello.defaultProps = {
    message: 'Hello World!'
}

export default  Hello
export const HelloClass = HelloClassC

const mapStateToProps = (state: any) => ({
    count: state.reducer2
})

const mapDispatchToProps = (dispatch:any) => {
    return {
        add: () => dispatch({type: 'TEST'})
    }
}
export const HelloRedux = connect(mapStateToProps, mapDispatchToProps)(Hello)