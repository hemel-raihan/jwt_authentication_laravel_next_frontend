import Layout from "../layouts/Layout";
import React from 'react';
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import AuthUser from "./AuthUser";

const Login = () => {

    const {http, setToken} = AuthUser();

    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [tkn, setTkn] = useState();
    
    //const [item, setItem] = useState();

    // useEffect = () =>{
        useEffect(()=>{
            const tokenString = localStorage.getItem('token');
            setTkn(tokenString)
        })
      if(tkn)
      {
        router.push('/');
      }

    const submit = () =>{
        http.post('/login',{email,password}).then((res)=>{
            const test =  localStorage.setItem('token', JSON.stringify(res.data.access_token));
            setToken(test);
        })
      }
    // }

    

    

    
    // const submit = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch('http://localhost:8000/api/login',{
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         //credentials: 'include',
    //         body: JSON.stringify({
    //             email, password
    //         })
    //     });
        
    //     // const content = await response.json();
    //     const token = response.asd;
    //     // localStorage.setItem('item', 'asd');
    //     console.log(token);
    //     //await router.push('/');
    // }

    // const submit = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch('http://localhost:8000/api/login',{
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         //credentials: 'include',
    //         body: JSON.stringify({
    //             email, password
    //         })
            
    //     }).then(res => res.json())
    //     .then(data => {
    //         if (!data) {
    //             setMessage('Someting went wrong!');
    //             notify("Something Went Wrong!");
    //             //return;
    //         }
    //         // setMessage('Department Added!');
    //         // notify('Department Added!');
    //         console.log(data)
    //         localStorage.setItem('token', JSON.stringify(data));
    //         router.push('/');
    //     });
        

        
    //     await router.push('/');
    // }

    

    

    return ( 
        <Layout>
        {/* <form onSubmit={submit}> */}
          <h1 className='h3 mb-3 fw-normal'>Please Sign in to my app</h1>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

          <button className='w-100 btn btn-lg btn-primary' onClick={submit} type='submit'>Sign in</button>
        {/* </form> */}
        </Layout>
      
     );
}
 
export default Login;