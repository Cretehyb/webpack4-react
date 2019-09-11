import React, { useState, useEffect, useRef } from 'react'
import childComponent from './po.less'

function Po(props) {
  const inputRef = useRef()
  const [count, changeCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])
  const [value, setValue] = useState('')
  useEffect(() => {
    console.log(inputRef.current.value)
  }, [inputRef])
  
  return (
    <div>
      <span className={childComponent.content}>{count} times</span>
      <button onClick={() => changeCount(count + 1)}>Click me</button>
      <div>
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Po

// useState:
// 1. 这个hook用来在函数组件中创建state状态和更新state的函数，参数是state的初始值，返回值是数组(?存疑)
// 2. 如果需要多个state变量, 只需再次调用useState()
// 3. 创建state变量一般是数组解构赋值，变量可直接在jsx中使用
// 4. 注意hook函数必须创建在函数组件中，否则会报错

// useEffect：
// 1. 这个hook是用来处理副作用的，包括操作DOM，发送请求，记录日志等，接受一个回调函数
// 2. 它会在每次渲染后都执行(即Dom更新完毕后运行useEffect)，如果想要减少不必要的useEffect执行，只需要添加useEffect的第二个参数即可(如：[count])
// 3. 利用js的闭包的机制，state和props保存在函数作用域中
// 4. 一些监听事件的绑定，需要在组件将要销毁前解绑，返回它的解绑事件(类似class组件中componentDidMount和componentWillUnmount)
// 5. 不能在条件判断、for循环和嵌套函数中调用useEffect Hook，不然会导致React读取后面的Hook失败，如果想放可以放在Hook的内部
