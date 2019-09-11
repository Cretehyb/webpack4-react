import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import loginStyles from './index.less'

class login extends PureComponent {
  backToHomePage = () => {
    this.props.history.push({
      pathname: '/home',
      query: '412412'
    })
  }

  render() {
    return (
      <div>
        <h3>登录页</h3>
        <div className={loginStyles.return} onClick={this.backToHomePage}>
          返回首页
        </div>
      </div>
    )
  }
}

export default login
