import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import login from './login.less'
import Detail from '../details/index';

interface Props extends RouteComponentProps { }
// interface State { }

const Login = (props: Props) => {
  console.log(props.history.location)
  const backToHomePage = () => {
    props.history.push({ pathname: '/home', state: { name: '123', id: '01' } })
  }
  // const handleError = () => {
  //   throw new Error('xxxx')
  // }

  return (
    <div>
      <h3>登录页</h3>
      {/* <button type={'button'} onClick={handleError}>生成错误信息</button> */}
      <div className={login.returns} onClick={backToHomePage}>
        返回首页
        </div>
      <Detail />
    </div>
  )
}

export default withRouter(Login)
