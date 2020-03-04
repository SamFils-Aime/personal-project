import React, { Component } from 'react'
import {connect} from 'react-redux'
import {  Link, Redirect } from 'react-router-dom';
import PaperDropzone from "./PaperDropzone"
import {updateState,resetFields,registerUser,loginUser} from './redux/reducer/authReducer'

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

    handleChange= e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleClickRegister=()=>{
        this.props.registerUser(this.state.username,this.state.password,this.state.firstname,this.state.lastname)
    }

    handleClickLogin= (e) =>{
        this.props.loginUser(this.state.username, this.state.password)
        .then(()=>{})
        .catch(error=>{console.log(error)})
    }

    render() {
        if(this.props.username){return <Redirect to="/user"/>}
        return (
            <div>
                <section>
                    <h1>login</h1>
                   
                        <p>username:</p>
                        <input type='text' name='username' onChange={this.handleChange}/>
                        <p>password:</p>
                        <input type='password' name='password' onChange={this.handleChange}/>
                    <Link to="/user">
                        <button onClick={this.handleClickLogin}>login</button>
                    </Link>
                    
                </section>
                <section>
                    <PaperDropzone username1={this.state.username}/>
                    <h1>register</h1>
                    <p>username:</p>
                    <input type='text' name='username' onChange={this.handleChange}/>
                    <p>password:</p>
                    <input type='password' name='password' onChange={this.handleChange}/>
                    <p>firstname:</p>
                    <input  name='firstname' onChange={this.handleChange}/>
                    <p>lastname:</p>
                    <input  name='lastname' onChange={this.handleChange}/>
                    <Link to="/user">
                    <button onClick={this.handleClickRegister}>register</button>
                    </Link>
                </section>
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
})(Authentication);