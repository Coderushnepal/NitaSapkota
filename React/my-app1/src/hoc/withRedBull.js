import React,{ Component } from 'react';

const withRedBull = (WrappedComponent) => {
    return class Userwrapper extends Component {
        constructor(props){
            super(props);

            this.state ={
                   count: null,
                 };
        
        }
        flyAway = () => {
            this.setState({count: "I want to fly"});
        }

        wings = () => {
            this.setState({count: "I have Wings"});

        }

        render() {
            return <WrappedComponent count={this.state.count} wings={this.wings} flyaway={this.flyaway} {...this.props} />;
          }
        


         
    }
}

export default withRedBull;
    
