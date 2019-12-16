import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '@/store/actions/increment'
import homeStyles from './home.less'
import Po from './po'
import qs from 'qs'
import { RouteComponentProps } from 'react-router-dom';
import H from 'history';

interface Location extends H.Location {
  query: { [key: string]: string };
}
interface MusicList extends Array<object> {
  length: number
}
interface Props extends RouteComponentProps {
  readonly location: Location;
  readonly musicList: MusicList,
  readonly incrementDispatch: () => {}
}
interface State { }
class Home extends PureComponent<Props, State> {
  state = {}
  public goToLogin = () => {
    interface params {
      id: number,
      name: string,
      key: number
    }
    const Params: params = { id: 12412412, name: 'dawdkwd', key: 22 }
    let paramStr: string = qs.stringify(Params)
    this.props.history.push(`/login?${paramStr}`)
  }
  public async componentDidMount() {
    await this.props.incrementDispatch()
  }
  render(): JSX.Element {
    const { musicList } = this.props
    let picListJSX: JSX.Element[] | JSX.Element
    if (!musicList.length) {
      picListJSX = <div>无图片</div>
    } else {
      const temp: any = musicList
      const list = temp[0]['channellist'] || []
      picListJSX = list.map((item: any, index: number) => {
        return (
          <div key={item.channelid}>
            <span>{item.name}</span>
            <img src={item.thumb} alt="" />
          </div>
        )
      })
    }

    return (
      <div className={homeStyles.div}>
        <h3>主页</h3>
        <div onClick={this.goToLogin}>前往登录页</div>
        <Po></Po>
        <div className={homeStyles.img}></div>
        <img src={require('../../assets/img/fish.jpg')} alt="图片" />
        {picListJSX}
      </div>
    )
  }
}
const mapStateToProps = (state: any): {} => ({
  musicList: state.incrementReducer.musicList
})

const mapDispatchToProps = (dispatch: any): any => ({
  incrementDispatch: bindActionCreators(increment, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
