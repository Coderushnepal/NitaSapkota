import React,{ Component } from 'react';

import withRedBull from '../hoc/withRedBull';

class Users extends Component {
    constructor(props){
        super(props);
    }

render(){
    return(
        <div>
            <button class="btn btn-flyaway" onClick={this.props.flyaway}>{this.props.count}Click</button>
                <h2>{this.props.count}</h2>
                <button class="btn btn-flyaway" onClick={this.props.Wings}>{this.props.count}Click</button>
                <h2>{this.props.names}</h2>
        </div>
    )
 }

}



export default withRedBull(Users);