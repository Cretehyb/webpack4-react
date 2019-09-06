import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '../../store/actions/increment'
import homeStyles from './index.less'
import PO from './po.js'
import qs from 'qs'

class Home extends PureComponent {
  goToLogin = () => {
    let paramStr = qs.stringify({id:12412412, name: 'dawdkwd', key: 22})
    this.props.history.push(`/login${paramStr}`)
  }
  componentWillMount() {
    this.props.incrementDispatch()
  }
  render() {
    return (
      <div className={homeStyles.div}>
        <h3>主页</h3>
        <PO></PO>
        <div onClick={this.goToLogin}>前往登录页</div>
        <div className={homeStyles.img}></div>
        <img src={require('../../assets/img/fish.jpg')} alt="未正确加载图片" />
        {this.props.musicList.length ?
          this.props.musicList[0].channellist.map((item,index) => {
            return (
            <div key={item.channelid}>
              <span>{item.name}</span>
              <img src={item.thumb} alt=""/>
            </div>
            )
          }) : ''
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  musicList: state.incrementReducer.musicList
})

const mapDispatchToProps = dispatch => ({
  incrementDispatch: bindActionCreators(increment, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
