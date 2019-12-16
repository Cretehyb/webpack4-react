import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { RouteComponentProps } from 'react-router-dom';
import login from './index.less'

interface Props extends RouteComponentProps { }
interface State { }

class Login extends PureComponent<Props, State> {
  state = {}
  backToHomePage = () => {
    this.props.history.push('/home', { userInfo: { name: '123', id: '01' } })
  }

  render() {
    return (
      <div>
        <h3>登录页</h3>
        <div className={login.returns} onClick={this.backToHomePage}>
          返回首页
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
