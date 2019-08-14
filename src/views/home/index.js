import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '../../store/action'
import homeStyles from './index.less'
import PO from './po.js'
const { isDev, isPro } = require('env')

class Home extends Component {
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
  goToLogin = () => {
    this.props.history.push('/login?id=12412412&name=dawdkwd&key=22')
  }
  render() {
    const imgSource = isDev
      ? '../../assets/img/candy.jpg'
      : isPro
      ? './img/candy.jpg'
      : ''
    console.log(this.props)
    console.log(this.props.increment())
    return (
      <div className={homeStyles.div}>
        <h3>主页</h3>
        <PO></PO>
        <span>哈哈</span>
        <div onClick={this.goToLogin}>前往登录页</div>
        <div>
          <img src={imgSource} alt='haha'/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  number: state.incrementReducer.number
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
