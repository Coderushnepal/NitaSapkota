import React,{ Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,

        };
    }

    isVowel = (char) => {
        const vowels =['a','e','i','o','u']
        return vowels.includes(char.toLowerCase());
    };

    plus = () => {
        this.setState({count: this.state.count+1});
    };

    minus = () => {
        this.setState({count: this.state.count-1});
    };

    render(){
        return(
            <div className= "main">
                 <h1 className={this.isVowel(this.props.name[0]) ? 'red' : 'green'}>{this.props.name}</h1>
                <h2>Count:{this.state.count}</h2>
               
                <button className="btn btn-plus" onClick={this.plus}>+</button>
                <button className="btn btn-minus" onClick={this.minus}>-</button>
               

            </div>
          
            
        );
    }
}

export default Counter;