import Head from 'next/head'
import { useEffect } from 'react'
import { useState } from 'react';
import Layout from '../layouts/Layout'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() =>{
    (
      async () => {
        try{
          const response = await fetch('http://localhost:8000/api/user',{
            credentials: 'include'
          });
          const content = await response.json();
          setMessage(`Hi ${content.name}`);
          setAuth(true);
        }catch(e){
          //setMessage('You are not logged in');
          await router.push('login');
          setAuth(false);
        }
        
      }
    )();
  });

  return (
  <>
    <Layout auth={auth}>
      <h1>{message}</h1>
    </Layout>
  </>
  )
}
