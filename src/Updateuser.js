import React, { Component } from 'react'
import { getSession } from "./redux/reducer/authReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {updateState,resetFields,registerUser,loginUser, updateuser} from './redux/reducer/authReducer'
import PaperDropzone from './PaperDropzone'


 class Updateuser extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:this.props.password,
            firstname:"",
            lastname:"",
            id:this.props.user.id
        }
    }

    componentDidMount(){
        this.props.getSession()
    }

    handleChange= e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleClickUser=()=>{
        console.log(this.props.user)
        this.props.updateuser(this.state.username,this.state.firstname,this.state.lastname, this.props.user.id)
    }

    

    render() {
        return (
            <div>
                <section>
                    <PaperDropzone username1={this.state.username}/>
                    <h1>register</h1>
                    <p>username:</p>
                    <input type='text' name='username' onChange={this.handleChange}/>
                    <p>firstname:</p>
                    <input  name='firstname' onChange={this.handleChange}/>
                    <p>lastname:</p>
                    <input  name='lastname' onChange={this.handleChange}/>
                    <Link to="/user">
                    <button onClick={this.handleClickUser}>Change</button>
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
    loginUser,
    getSession,
    updateuser
})(Updateuser);