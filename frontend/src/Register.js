                import React from 'react'
                import toast, { Toaster } from 'react-hot-toast';
                import styled from 'styled-components'
                import {Link, useNavigate}from 'react-router-dom'
                import PropagateLoader from "react-spinners/PropagateLoader";
                import { CSSProperties } from 'react';
                import { useState,useEffect } from 'react'
                const override=CSSProperties = {
                    display: "block",
                    margin: "0 auto",
                    borderColor: "red",
                };
                const Register = () => {
                    const navigate=useNavigate();
                   
                    const [form, setform] = useState({});
                    const [loading, setloading] = useState(false);
                    const handleSubmit = async(e) => {
                        
                    e.preventDefault();
                    setloading(true);
                    const response = await fetch("http://localhost:8001/register",{
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
                        console.log("valid Registration");
                        navigate("/");
                        setloading(false);
                    }

                    }
                    const handleChange = (e) => {
                        setform({...form,[e.target.name]:e.target.value});
                    }
                    
                    
                    

                    return (


                    <Crapper>
                        {loading ? 
                    ( <PropagateLoader
                    color="#36d7b7"

                    cssOverride={null}
                    />):
                        (
                        
                        <Wrapper>
                      
                        <div className="left">
                            <img src="https://images.unsplash.com/photo-1567416809369-4c34257822d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt="" />
                        </div>
                        <div className="right">
                        <div className='heading'>
                            <h1>Register with your e-mail</h1>
                            </div>
                            <form  onSubmit={handleSubmit}>
                                        <legend>username</legend>
                                                <input type="text" name="username" onChange={handleChange} id="username" />
                                            
                                                <br/>
                                            <legend>Email</legend>
                                                <input type="text" name="email" onChange={handleChange} id="email" />
                                            
                                                <br/>
                                    

                                                <legend>Password</legend>
                                                <input type="password" name="password" onChange={handleChange} id="password" />
                                                <legend>Confirm Password</legend>
                                                <input type="cpassword" name="cpassword" onChange={handleChange} id="cpassword" />

                                            
                                    
                                                <br/>
                                                <Link to="/" className='f'>Already  Registered ?</Link>
                                            

                                                <button className='submit' onSubmit={handleSubmit}>Sign up</button>
                                        
                                                </form>

                        </div>
                   
                        </Wrapper>)
                        }
                        <Toaster />
                    </Crapper>
                )
                }

                const Crapper = styled.div`
                display: flex;
                flex-direction: row;
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
            
                .left img{
                    height:98vh;
                    margin: 1rem;
                    width: 40vw;
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    
                    margin-left:7vw;
                    margin-top: 7vh;
                }
                legend{
                    font-weight: 500;
                    margin-left:3vw;
                }
                input{
                    margin-left: 3vw;
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
                    margin-left: 3vw;
                    font-size: 1rem;
                    cursor: pointer;
                }
                
                
                


                `

                export default Register