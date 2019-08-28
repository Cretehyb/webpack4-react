import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '../../store/actions/increment'
import homeStyles from './index.less'
import PO from './po.js'
const { isDev, isPro } = require('env')
import fish from '../../assets/img/fish.jpg'

class Home extends PureComponent {

  goToLogin = () => {
    
    this.props.history.push('/login?id=12412412&name=dawdkwd&key=22')
  }
  haha = () => {
    this.props.increment({number: 10})
  }
  render() {
    console.log(this.props.number)
    return (
      <div className={homeStyles.div}>
        <h3>主页</h3>
        <PO></PO>
        <span onClick={this.haha}>哈哈</span>
        <div onClick={this.goToLogin}>前往登录页</div>
        <div className={homeStyles.img}>
        </div>
        <img src={fish} alt="haha" />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  number: state.incrementReducer.number // incrementReducer类似命名空间，也是reducer的名称
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
