import Layout from "../layouts/Layout";
import React from 'react';
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // useEffect(() =>{
    //     (
    //       async () => {
    //         try{
    //           const response = await fetch('http://localhost:8000/api/user',{
    //             credentials: 'include'
    //           });
    //           const content = await response.json();
    //           //setAuth(true);
    //           if(content)
    //           {
    //             await router.push('/');
    //           }
    //         }catch(e){
    //           console.log('asd');
    //         }
            
    //       }
    //     )();
    //   });

    
    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email, password
            })
        });

        await router.push('/');
    }

    

    

    return ( 
        <Layout>
        <form onSubmit={submit}>
          <h1 className='h3 mb-3 fw-normal'>Please Sign in to my app</h1>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        </form>
        </Layout>
      
     );
}
 
export default Login;