import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthUser = () => {
    const router = useRouter();

    const [a,sa] = useState();

    
        const getToken = (token) => {
        //const tokenString = localStorage.getItem('token');
        // const userToken = JSON.parse(tokenString);
        // sa(userToken)
        return token;
            }
            
    
    
    

    const [token, setToken] = useState(getToken());

    const saveToken = (token) =>{

           // localStorage.setItem('token', JSON.stringify(token));
            setToken(token);
            getToken(token);
             router.push('/');

        
    }

    const http = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-Type" : "application/json"
        }
    });

    return {
        setToken: saveToken,
        token,
        getToken,
        http
    }
       
    
}
 
export default AuthUser;