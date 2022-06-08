import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import AuthUser from "./AuthUser";

export default function Dashboard()
{
    const [auth, setAuth] = useState(false);
    const {http} = AuthUser();
    const [userDetails,setUserdetails] = useState();

    useEffect(() =>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetails(res.data);
            setAuth(true);
        })
    }

    function renderElement(){
        if(userDetails){
            return <div>
                <h1>Dashboard Page</h1>
            <h4>Name</h4>
            <p>{userDetails.name}</p>
            <h4>Email</h4>
            <p>{userDetails.email}</p>
            </div>
        }
        else
        {
            return <p>Loading.....</p>
        }
    }

    return(
        <Layout auth={auth}>
        {renderElement()}
      </Layout>
    )
}