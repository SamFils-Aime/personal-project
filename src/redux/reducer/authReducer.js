import axios from "axios";

const initialState = {
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  id:"",
  user: [],
  loading: false
};

const UPDATE_STATE = "UPDATE_STATE";
const RESET_FIELDS = "RESET_FIELDS";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GETSESSION="GETSESSION"
const CHECKSESSION="CHECKSESSION"
const UPDATE_USER="UPDATE_USER"


export const updateState = e => {
  return {
    type: UPDATE_STATE,
    payload: e
  };
};

export const resetFields = () => {
  return {
    type: RESET_FIELDS
  };
};

export const getSession=()=>{
  return{
    type: GETSESSION,
    payload: axios.get('/auth/user')

  }
}
export const updateuser = (username,firstname,lastname, user_id)=>{
  return{
    type: UPDATE_USER,
    payload: axios.put(`/api/update/${user_id}`,{
      username,
      firstname,
      lastname
    })
  }
}


export const registerUser = (username, password,firstname,lastname) => {
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", {
       username,
       password,
       firstname,
       lastname
    })
  };
};

export const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", {
      username,
      password
    })
  };
};

export const logOut = () => {
  return {
    type: LOGOUT_USER,
    payload: axios.get("/auth/logOut")
}
}



export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...payload
      };
    // case `${REGISTER_USER}_PENDING`:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        username: payload.data.username,
        user: payload.data
      };
    case `${UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: payload.data,
        username: payload.data.username,
      };
      // case `${LOGIN_USER}_PENDING`:
      //   return {
      //       ...state,
      //       loading: true
      //   }
    case `${LOGIN_USER}_FULFILLED`:
        return {
            ...state,
            loading: false,
            username: payload.data.username,
            user: payload.data
        };
    // case `${LOGOUT_USER}_PENDING`:
    //   return {
    //     ...state,
    //     loading: true,
    //     user: payload.data
    //   };
    case `${LOGOUT_USER}_FUFILLED`:
        console.log(initialState)
      return {
        ...state,
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        id:'',
        user: [],
        loading: false
      };
      case `${GETSESSION}_PENDING`:
        return {
          ...state,
          loading: true
        }
      case `${GETSESSION}_FUFILLED`:
        console.log(payload)
        return{
          ...state,
          loading:false,
          user: payload.data
        }
     case `${RESET_FIELDS}`:
       return{
        ...state,
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        id:'',
        user: [],
        loading: false
       }

    default:
      return state;
  }
}
