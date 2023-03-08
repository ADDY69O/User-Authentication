                        import React, { useEffect } from 'react'
                        import styled from 'styled-components'
                        import { useState } from 'react'

                        function Home() {
                            const [form, setform] = useState({});
                            const [use, setuse] = useState([])

                            const handleSubmit=async(e)=>{
                                e.preventDefault();
                                
                                // console.log(form)
                                const response=await fetch('http://localhost:8000/demo',{
                                    method:'POST',
                                    body:JSON.stringify(form),
                                    headers:{
                                        'Content-Type':'application/json'
                                    }
                                })
                                const data =await response.json();
                                console.log(data);
                                return data;

                                
                            }

                            const handleChange=(e)=>{
                                
                                // console.log(e.target.value,e.target.name);
                                setform({...form,[e.target.name]:e.target.value});

                            }   
                            const getUser=async(e)=>{
                                const response=await fetch('http://localhost:8000/demo',{
                                method:'GET',
                                headers:{
                                    'Content-Type':'application/json'
                                }})
                                const data=await response.json();
                                // e.target.value=data;
                                setuse(data);
                                console.log(data);
                                return data;
                            }

                            useEffect(()=>{
                                getUser();
                            },[])
                            

                        return (
                            <Wrapper >
                                <div className='main'>
                                <div className='log'>
                        
                                <form  onSubmit={handleSubmit}>
                                <h1>Login Form</h1>
                                    <span>
                                    <label htmlFor="username">Username</label>
                                <input type="text" name="username" onChange={handleChange} id="username" />
                                </span>
                                <br/>
                                <span>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" onChange={handleChange} id="password" />

                                </span>
                                
                                <button className='submit' onSubmit={handleSubmit}>Login</button>

                                </form>
                                </div>

                        

                                </div>
                                <div className='ss'>
                                    <h1>Saved Values</h1>
                                   
                                    <h1>{JSON.stringify(form)}</h1>
                                    <h2>All users</h2>
                                    <ul>
                                        <li>{use.map(users=><li key={users._id}>{users.username},{users.password} </li> )}</li>
                                    </ul>

                                    
                                </div>

                            </Wrapper>
                        )
                        }

                        const Wrapper=styled.div`
                        padding: 0;
                        margin: 0;
                            .log{
                                width: 20vw;
                                height: 60vh;
                                /* margin-top: 10vh; */
                                margin-left: 35vw;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                padding: 2rem;
                            
                                
                            }
                            h1{
                                margin: auto;
                            }
                            form{
                                background-color: white;
                                height: 50vh;
                                width: 30vw;
                                font-size:1.2rem;
                        
                                display: flex;
                                flex-direction: column;
                                gap: 0.4rem;

                                input{
                                    height: 2rem;
                                    font-size: 1.2rem;
                                }
                            }
                            span{
                                display: flex;
                                flex-direction: row;
                                
                                justify-content: space-around;
                            }
                            .submit{
                                width: 50%;
                                height: 3rem;
                                margin: auto;
                                border-style: none;
                                border-radius: 12px;
                                color: white;
                                font-size:1.2rem;
                                background-color: #ea4c89;
                                cursor: pointer;
                            }
                            .ss{
                        
                                margin-left: 40vw;
                                width: 80vw;
                                font-size:0.7rem;
                                height: 30vh;
                                background-color: white;
                                display: flex;
                                flex-direction: column;
                                justify-content: stretch;
                                margin: auto;
                            
                            }
                        background-color: #ea4c89;
                            height: 100vh;
                            width: 100vw;
                        `


                        export default Home