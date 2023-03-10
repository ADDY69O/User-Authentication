import React from 'react'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { HiUserGroup } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import { CSSProperties } from 'react';
import { TbLogout } from 'react-icons/tb';
import { useState } from 'react';


import styled from 'styled-components'
const override=CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
function Navbar() {
    const navigate=useNavigate();
    const [loading, setloading] = useState(false);
    const handleLogout = async(e) => {
        e.preventDefault();
        setloading(true);
        const response = await fetch("http://localhost:8001/logout",{
            method:"PUT",
           
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
       if(!data ){
        toast.error("LOGIN AGAIN");
        navigate("/");
        setloading(false);
          
       }
       else if(response.status===422){
        toast.error(data.error);
        navigate("/");
        setloading(false);

       }
       else{
        toast.success(data.message);
        navigate("/");
        setloading(false);
        
       }
       
     

    }
  return (<Wrapper>
    {loading? (<div className='crapper'> <PropagateLoader
                    color="#36d7b7"

                    cssOverride={null}
                    /></div>) :
     <Wrapper>
        
     <div>
         <h1 className='tag'><HiUserGroup size={35}/> UserPedia</h1>
     </div>

     <div>
         
         <h1 className='out'> <TbLogout size={35} color={"red"} onClick={handleLogout}/></h1>

     </div>



     <Toaster />
 </Wrapper>
    }
   
    </Wrapper>
  )
}

const Crapper=styled.div`


`;

const Wrapper = styled.nav`

    .crapper{
        display: flex;
                flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
    }

    height: 10vh;
    width: 100vw;
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-between;
    .tag{
        margin-left: 1.3rem;
    }
    div{
        display: flex;

    }
    .out{
        margin-right:1.2rem;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: white;
        margin-right:1.3rem;
    }

`;


export default Navbar