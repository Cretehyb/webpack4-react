import { RouteComponentProps } from 'react-router-dom'
interface ActionConstruction {
  type: string
  payload?: Object
}
interface DetailState {
  count: number
}
interface Props extends RouteComponentProps {}
export { ActionConstruction, DetailState, Props }
