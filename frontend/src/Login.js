        import React from 'react'
        import styled from 'styled-components'

        const Login = () => {
            const handleSubmit = () => {
            }
            const handleChange = () => {
            }
        
            return (


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
                                            <a href="/" className='f'>Forgot Password?</a>

                                        <button className='submit' onSubmit={handleSubmit}>Sign in</button>
                                
                                        </form>

                </div>

            </Wrapper>
        )
        }

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
        }
        


        `

        export default Login