import React ,{Component}from 'react';

class SignUp extends Component {
    state={

    }
    handleChange=(e) =>{
       console.log(e) 
    }

    handleSubmit=(e) =>{
       console.log(e) 
}
  render() {
    return(
        <div  class= "container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id ="email" onChange={this.handleChange}/>
                    </div>

                     <div className="input-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id ="password" onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                    <button className="btn btn-dark">Login</button>
                        </div>

            </form>
        </div>
    )
  };
}
export default  SignUp;