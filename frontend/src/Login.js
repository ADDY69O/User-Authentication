        import React from 'react'
        import toast, { Toaster } from 'react-hot-toast';
        import PropagateLoader from "react-spinners/PropagateLoader";
        import styled from 'styled-components'
        import { useState,useEffect } from 'react';
        import { CSSProperties } from 'react';
        import { Link, useNavigate } from 'react-router-dom';

        const override=CSSProperties = {
            display: "block",
            margin: "0 auto",
            borderColor: "red",
          };
        const Login = () => {
            const navigate = useNavigate();
            const [form, setform] = useState({});
            const [loading, setloading] = useState(false);
         
            const handleSubmit = async(e) => {
                e.preventDefault();
                setloading(true);
                const response = await fetch("http://localhost:8001/login",{
                    method:"POST",
                    body:JSON.stringify(form),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                const data = await response.json();
               if(!data ){
                toast.error("invalid  Registration");
                    console.log("Invalid Registration");
                    setloading(false);
               }
               else if(response.status===422){
                toast.error(data.error);
                setloading(false);

               }
               else{
                toast.success(data.message);
                navigate("/home");
                setloading(false);
                
               }
               
             

            }
            const handleChange = (e) => {
                setform({...form,[e.target.name]:e.target.value});
            }

        

        
            return (


            <Crapper>
               {loading ?(
              
<PropagateLoader
  color="#36d7b7"

  cssOverride={null}
/>

               ):(
                
                <Wrapper>
                      <div className="left">
                    <img src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80" alt="" />
                </div>
                <div className="right">
                <div className='heading'>
                    <h1>Welcome <br/> Sign In to Continue</h1>
                    </div>
                    <form  onSubmit={handleSubmit}>
                                
                                    <legend>Email</legend>
                                        <input type="text" name="email" onChange={handleChange} id="email" />
                                    
                                        <br/>

                                        <legend>Password</legend>
                                        <input type="password" name="password" onChange={handleChange} id="password" />

                                    
                                        <br/>
                                            <Link to="/register" className='f'>Not yet Registered ?</Link>

                                        <button className='submit' onSubmit={handleSubmit}>Sign in</button>
                                
                                        </form>

                </div>
                </Wrapper>
                )}
        
                <Toaster />
        

            </Crapper>
        )
        }

        const Crapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        
        `
        const Wrapper=styled.div`
       
        margin: 0px;
        padding: 0px;
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
        display: flex;
        flex-direction: row;
        h1{
            font-size: 56px;
            font-family: 'Nanum Gothic', sans-serif;
        }
        .heading{

        }
        .left img{
            height:98vh;
            margin: 1rem;
        }
        .right{
            display: flex;
            flex-direction: column;
            
            margin-left:10vw;
            margin-top: 15vh;
        }
        legend{
            font-weight: 500;
        }
        input{
            height: 6vh;
            width: 80%;
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }
        .f{
            margin-left:18vh;
            color: black;
            font-weight: bold;
           
        }
        .submit{
            margin-top: 3vh;
            height: 6vh;
            width: 80%;
            background-color: black;
            color: white;
            font-size: 1rem;
            cursor: pointer;
        }
        


        `

        export default Login