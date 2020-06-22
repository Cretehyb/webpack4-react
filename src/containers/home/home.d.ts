import { RouteComponentProps } from 'react-router-dom'

interface MusicList {
  length: number
}
interface Props extends RouteComponentProps {
  musicList: MusicList
  incrementDispatch: (args?: object) => { args?: object }
  dispatch: () => Promise<void>
}
interface Methods {
  goToLogin(): void
  gotoDetail(): void
  init(): void
  componentDidMount(): void
}
interface ParamsG<T = number, U = string> {
  id: T
  name: U
  key: T
}
export { Props, Methods, ParamsG }
