import React, { Component } from 'react'
import "./css/main.scss"
import {connect} from 'react-redux'
import {  Link, Redirect } from 'react-router-dom';
import PaperDropzone from "./PaperDropzone"
import Register from "./Register" 
import {updateState,resetFields,registerUser,loginUser, logOut} from './redux/reducer/authReducer'

 class Authentication extends Component {
     constructor(props){
         super(props)
         this.state={
             username:"",
             password:"",
             firstname:"",
             lastname:""
         }
     }

     componentDidMount(){
            this.props.resetFields()
     }
    handleChange= e =>{
        console.log(e)
        this.setState({[e.target.name]: e.target.value})
    }

    handleClickRegister=()=>{
        this.props.registerUser(this.state.username,this.state.password,this.state.firstname,this.state.lastname)
    }

    handleClickLogin= () =>{
        this.props.loginUser(this.state.username, this.state.password)
        .then(()=>{})
        .catch(error=>{console.log(error)})
    }

    render() {
            console.log(this.props.user)
        if(this.props.username){return <Redirect to="/user"/>}
        return (
            <div >
                <div className='authcontainer'>
                <section>
                    <h1>login</h1>
                   
                        <span className="input">
                        <input type='text' name="username" placeholder='Username' onChange={this.handleChange}/>
                        </span>
                        <span className="input">
                        <input type='password' name="password" placeholder='Password' onChange={this.handleChange}/>
                        </span>
                            

                    <Link to="/user">
                        <button onClick={this.handleClickLogin}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>
                            Register
                        </button>
                    </Link>
                    
                </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        firstname: state.authReducer.firstname,
        lastname: state.authReducer.lastname,
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, {
    updateState,
    resetFields,
    registerUser,
    loginUser,
    logOut
})(Authentication);