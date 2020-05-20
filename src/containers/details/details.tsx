import React, { useState, useContext, createContext, useReducer, useEffect, SFC, memo } from 'react';
import { Reducer } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import detailStyles from './details.less';
// const Detail: React.FC = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={() => { setCount(count + 1) }} >+</button>
//             <button onClick={() => { setCount(count - 1) }} >-</button>
//             <button onClick={() => { setCount(0) }}>重置</button>
//         </div>
//     )
// }

// const CountContext = createContext(12)
// const Number: React.FC = () => {
//     const count = useContext(CountContext)
//     return (
//         <div>{count}</div>
//     )
// }
// const Detail: React.FC = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <CountContext.Provider value={count}>
//                 <Number />
//             </CountContext.Provider>
//             <button onClick={() => { setCount(count + 1) }} >+</button>
//             <button onClick={() => { setCount(count - 1) }} >-</button>
//             <button onClick={() => { setCount(0) }}>重置</button>
//         </div>
//     )
// }
interface ActionConstruction {
    type: string,
    payload?: Object
}
interface DetailState {
    count: number;
}
interface Props extends RouteComponentProps {

}
const initialState: DetailState = { count: 0 };
const reducer: Reducer<DetailState, ActionConstruction> = (state = initialState, action: ActionConstruction) => {
    switch (action.type) {
        case 'increment':
            return { ...{ count: state.count + 1 } };
        case 'decrement':
            return { ...{ count: state.count - 1 } };
        case 'reset':
            return { ...{ count: 0 } }
        default:
            throw new Error();
    }
}
let areEqual
const Detail: SFC<Props> = (props: Props) => {
    console.log('子组件渲染了')
    const [state, dispatch] = useReducer(reducer, initialState)
    // const areEqual = (prevProps: Props, nextProps: Props) => {
    //     return prevProps.name === prevProps.name
    // }

    return (
        <>
            <div className={detailStyles.countBox}>
                Count: {state.count}
                <button onClick={() => { dispatch({ type: 'increment' }) }} >+</button>
                <button onClick={() => { dispatch({ type: 'decrement' }) }} >-</button>
                <button onClick={() => { dispatch({ type: 'reset' }) }}>重置</button>
            </div>
        </>
    )
}
export default memo(withRouter(Detail), areEqual)