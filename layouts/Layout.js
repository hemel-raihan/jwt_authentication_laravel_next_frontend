
import Head from "next/head";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { useRouter } from "next/router";

function Layout( props ) {

  let menu;

  const router = useRouter();

  const logout = async() =>{
      await fetch('https://dry-fortress-31925.herokuapp.com/api/logout',{
          method: 'POST',
          headers: {'content-type': 'application/json'},
         // credentials: 'include'
      })
      localStorage.removeItem('token');

      await router.push('/login');
  }

  if(!props.auth)
  {
    menu = (
            <div className="navbar-nav">
              <Link href="/"><a className="nav-item nav-link active" >Home</a></Link>
              <Link href="/login"><a className="nav-item nav-link" >Login</a></Link>
              <Link href="/register"><a className="nav-item nav-link" >Registration</a></Link>
              <a className="nav-item nav-link" onClick={logout} href="#">Logout</a>
            </div>
    )
  }
  else
  {
    menu = (
            <div className="navbar-nav">
              <a className="nav-item nav-link" onClick={logout} href="#">Logout</a>
            </div>
    )
  }


  return (
    <>
    <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
    </Head>

    <Nav menu={menu} />

    <main className='form-signin'>
      {props.children}
    </main>
   
  </>
  );
}

export default Layout;
