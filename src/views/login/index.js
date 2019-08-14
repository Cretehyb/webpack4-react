import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  loginStyles from './index.less'

class login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  backToHomePage = () => {
    this.props.history.push({
      pathname: '/home',
      query: '412412'
    })
  }

  render() {
    console.log(this.props)
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
