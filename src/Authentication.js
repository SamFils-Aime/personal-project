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
            console.log(this.state)
        if(this.props.username){return <Redirect to="/user"/>}
        return (
            <div >
                <div className='authcontainer'>
                <section>
                    <h1>login</h1>
                   
                        <p>username:</p>
                        <input type='text' name="username" placeholder='Username' onChange={this.handleChange}/>
                        <p>password:</p>
                        <input type='password' name="password" placeholder='Password' onChange={this.handleChange}/>
                    <Link to="/user">
                        <button onClick={this.handleClickLogin}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>
                            Register
                        </button>
                    </Link>
                    
                </section>

                {/* <section>
                    <h1>register</h1>
                    <p>username:</p>
                    <input type='text' name="username" placeholder='Username' onChange={this.handleChange}/>
                    <p>password:</p>
                    <input type='password' name="password" placeholder='Password' onChange={this.handleChange}/>
                    <p>firstname:</p>
                    <input  name="firstname" placeholder='Firstname' onChange={this.handleChange}/>
                    <p>lastname:</p>
                    <input  name="lastname" placeholder='Lastname' onChange={this.handleChange}/>
                    <Link to="/user">
                    <button onClick={this.handleClickRegister}>Register</button>
                    </Link>
                </section>
                    <PaperDropzone username1={this.state.username}/> */}
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