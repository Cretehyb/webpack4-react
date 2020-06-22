import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '@/store/actions/increment'
import { withRouter } from 'react-router-dom';
import homeStyles from './home.less'
import Po from './po'
import { Props, Methods, ParamsG } from './home'

class Home extends PureComponent<Props> implements Methods {

  public goToLogin = () => {
    const Params: ParamsG = { id: 12412412, name: 'lijun', key: 22 }
    this.props.history.push({ pathname: '/login', state: Params })
  }
  public gotoDetail = () => {
    this.props.history.push({ pathname: '/detail', state: {} })
  }
  public init = () => {
    this.props.incrementDispatch({ title: 'guide' })
  }
  public componentDidMount() {
    this.init()
  }
  render(): JSX.Element {
    const { musicList } = this.props
    let picListJSX: JSX.Element[] | JSX.Element
    if (!musicList.length) {
      picListJSX = <div>无图片或请求图片失败</div>
    } else {
      const temp: any = musicList
      const list = temp[0].channellist || []
      picListJSX = list.map((item: any, index: number) => {
        return (
          <div key={item.artistid}>
            <span>{item.name}</span>
            <img src={item.avatar} alt="" />
          </div>
        )
      })
    }

    return (
      <div className={homeStyles.div}>
        <h3>主页</h3>
        <div onClick={this.goToLogin} className={homeStyles.gotoLogin}>前往登录页</div>
        <Po></Po>
        <div onClick={this.gotoDetail} >前往详情页</div>
        <div className={homeStyles.imgBox}>
          <img src={require('../../assets/img/candy.jpg')} alt="pic" />
        </div>
        <img src={require('../../assets/img/fish.jpg')} alt="pic" />
        {picListJSX}
      </div>
    )
  }
}
const mapStateToProps = (state: any): {} => ({
  musicList: state.incrementReducer.musicList
})

const mapDispatchToProps = (dispatch: any): {} => ({
  incrementDispatch: bindActionCreators(increment, dispatch)
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
    (Home))
