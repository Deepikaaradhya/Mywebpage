import React,{Component} from 'react';

const url="https://julynodeapi.herokuapp.com/menuItem";
const PostUrl="https://julynodeapi.herokuapp.com/placeOrder";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})

    }

    handleSubmit = () =>{
        console.log(this.state)
        fetch(PostUrl,
            {
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(this.props.history.push('/viewOrder'))
    }

    
    render(){
        return(
            <div className="container">
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>
                            Login
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6"> 
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>    
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" name="address" value={this.state.password}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Login
                        </button>      
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Login