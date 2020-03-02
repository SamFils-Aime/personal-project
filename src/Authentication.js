import React, { Component } from 'react'
import {connect} from 'react-redux'
import PaperDropzone from "./PaperDropzone"
import {updateState,resetFields,registerUser,loginUser} from './redux/reducer/authReducer'

 class Authentication extends Component {

    handleChange= e =>{
        this.props.updateState({[e.target.name]: e.target.value})
    }

    handleClickRegister=()=>{
        this.props.registerUser(this.props.username,this.props.password,this.props.firstname,this.props.lastname)
        .then(
            ()=>{
            this.props.loginUser(this.props.username, this.props.password)}
        )
        .catch(error=>{console.log(error)})
    }

    handleClickLogin= () =>{
        this.props.loginUser(this.props.username, this.props.password)
        .then(()=>{})
        .catch(error=>{console.log(error)})
    }

    render() {
        return (
            <div>
                <section>
                    <h1>login</h1>
                    <div>
                        <p>username:</p>
                        <input type='text' name='username' onChange={this.handleChange}/>
                        <p>password:</p>
                        <input type='password' name='password' onChange={this.handleChange}/>
                    </div>
                        <button onClick={this.handleClickLogin}>login</button>
                </section>
                <section>
                    <PaperDropzone/>
                    <h1>register</h1>
                    <div>
                    <p>username:</p>
                    <input type='text' name='username' onChange={this.handleChange}/>
                    <p>password:</p>
                    <input type='password' name='password' onChange={this.handleChange}/>
                    <p>firstname:</p>
                    <input  name='firstname' onChange={this.handleChange}/>
                    <p>lastname:</p>
                    <input  name='lastname' onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleClickRegister}>register</button>
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