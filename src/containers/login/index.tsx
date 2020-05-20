import React, { PureComponent, useState, useCallback } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import login from './index.less'
import Detail from '../details/details';

interface Props extends RouteComponentProps { }
interface State { }

const Login = (props: Props) => {
  console.log(props.history.location)
  const backToHomePage = () => {
    props.history.push('/home', { userInfo: { name: '123', id: '01' } })
  }

  return (
    <div>
      <h3>登录页</h3>
      <div className={login.returns} onClick={backToHomePage}>
        返回首页
        </div>
      <Detail />
    </div>
  )
}

export default withRouter(Login)
