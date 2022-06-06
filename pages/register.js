import { useRouter } from "next/router";
import {useState } from "react";
import Layout from "../layouts/Layout";

const Register = () => {

    const router = useRouter();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();
        await fetch('https://dry-fortress-31925.herokuapp.com/api/register',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name, email, password
            })
        });

        await router.push('login');

    }

    return ( 
      
        <Layout>
        <form onSubmit={submit}>
          <h1 className='h3 mb-3 fw-normal'>Please Register</h1>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        </form>
        </Layout>
      
     );
}
 
export default Register;