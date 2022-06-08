// import axios from "axios";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const AuthUser = () => {
//     const router = useRouter();

//     const [a,sa] = useState();

    
//         const getToken = (token) => {
//         //const tokenString = localStorage.getItem('token');
//         // const userToken = JSON.parse(tokenString);
//         // sa(userToken)
//         return token;
//             }
            
    
    
    

//     const [token, setToken] = useState(getToken());

//     const saveToken = (token) =>{

//            // localStorage.setItem('token', JSON.stringify(token));
//             setToken(token);
//             getToken(token);
//              router.push('/');

        
//     }

//     const http = axios.create({
//         baseURL: "http://localhost:8000/api",
//         headers: {
//             "Content-Type" : "application/json"
//         }
//     });

//     return {
//         setToken: saveToken,
//         token,
//         getToken,
//         http
//     }
       
    
// }
 
// export default AuthUser;


import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AuthUser() {

    const router = useRouter();

    const getToken = () =>{
        if (typeof window !== 'undefined') {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
        }
    }

    const getUser = () =>{
        if (typeof window !== 'undefined') {
        const userString = localStorage.getItem('user');
        const user_details = JSON.parse(userString);
        return user_details;
        }
    }

    const [user,setUser] = useState(getUser())
    const [token,setToken] = useState(getToken())

    function saveToken(user,token){
        if (typeof window !== 'undefined') {
        // Perform localStorage action
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);

        router.push('/dashboard');

        }
        console.log(user,token);
    }

    function logout(){
        localStorage.clear()
        router.push('/login')
    }

        const http = axios.create({
            baseURL:"http://localhost:8000/api",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });

    return {
        http,
        setToken: saveToken,
        logout,
        token,
        user,
    }
}