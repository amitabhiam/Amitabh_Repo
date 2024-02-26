import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const signInAPI = 'https://dummyjson.com/auth/login';


const initialState = {
    isAuthenticated : false,
    // userId : 'amitabh',
    error : null,
    isCaptchaValid : false,
    email : '',
    password : '',
}

const authSlice = createSlice({
    name:'auth',
    initialState,

    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.error = null;
        },

        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.email = null;
            state.error = action.payload.error;
        },

        setEmail : (state, action) => {
            state.email = action.payload;
        },

        setPassword : (state, action) => {
            state.password = action.payload;
        }
    },
});

export const getLoginDetails = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post(signInAPI, 
        {
            // email: 'kminchelle',
            // password: '0lelplR',
            username: email,
            password: password,
        },
        {
            headers: {
                'Content-Type' : 'application/json',
            }
        },
        );
        console.log("API Response:", res);
        // dispatch(loginSuccess({userId: email}));
        
        if(res.data) {
            dispatch(loginSuccess({email: res.data.username}));
        }
        else {
            console.log('response is undefined');
        }
        

        console.log(res.data, '###');
        console.log('HEY AMITABH, WELCOME');
    }

    catch(error) {
        // dispatch(loginFailure({error: res.data.error}));
        console.log(error);
    }
}


export const {loginSuccess, loginFailure, validateCaptcha, setEmail, setPassword} = authSlice.actions;

export default authSlice.reducer;

