                        import React, { useEffect } from 'react'
                        import styled from 'styled-components'
                        import { useState } from 'react'
import Navbar from './Navbar'

import Birds from './Birds'




                        function Home() {
                           

                        return (
                            <Wrapper >
                               
                                <Navbar/>
                               
                                <  Birds />
                              
                            </Wrapper>
                        )
                        }

                        const Wrapper=styled.div`
                        .gamee{ 
                            width: 90vw;
                            height: 80vh;
                        }
                        `;
                        


                        export default Home