import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '../../store/actions/increment'
import PO from './po.js'
import homeStyles from './index.less'
import {flatten} from '../../utils/index.js'

class Home extends PureComponent {
  goToLogin = () => {
    this.props.history.push('/login?id=12412412&name=dawdkwd&key=22')
  }
  haha = () => {
    const randomId = String(Math.floor(Math.random() * 1000000000000))
    this.props.increment({ branchId: randomId })
  }
  render() {
    const a = flatten([1,5,1,[9,5,45,45]])
    console.log(this.props.number)
    return (
      <div className={homeStyles.div}>
        <h3>主页</h3>
        <PO></PO>
        <button onClick={this.haha}>随机更新机构号</button>
        <div>redux更新的机构号：{this.props.branchId}</div>
        <div>点击更新的次数：{this.props.number}</div>
        <div onClick={this.goToLogin}>前往登录页</div>
        <div className={homeStyles.img}></div>
        <img src={require('../../assets/img/fish.jpg')} alt="未正确加载图片" />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  number: state.incrementReducer.number,
  branchId: state.incrementReducer.branchId
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
