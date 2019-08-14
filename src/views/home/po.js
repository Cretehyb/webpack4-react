import React ,{Component} from 'react'
import childComponent from'./po.less'

class Po extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={childComponent.content}>子组件</div>
         );
    }
}
 
export default Po;