import React ,{Component} from 'react'
import childComponent from'./po.scss'

class Po extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={childComponent.content}>子组件</div>
         );
    }
}
 
export default Po;