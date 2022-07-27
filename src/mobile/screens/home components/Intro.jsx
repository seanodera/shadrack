import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { image1, image3 } from '../../../Contsants'

const Intro = () => {
  return (
    <section style={{

        backgroundImage: `url("${image1}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }} >
        <section style={{

            webkitBackdropFilter: 'blur( 20px )',
            backdropFilter: 'blur(20px)',
        }}>
            <section style={{
                  width: '100vw',
                  height: '70vh',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,23,68,0.5)',
                  textAlign: 'start'
            }}>
                
<Container className='px-3 py-3'>
               <h5 style={{
                   color: 'white'
               }}> We Are </h5>
                <br/>
                <h3 style={{
                    color: 'white'
                }}>Shedrack&amp;Co</h3>
    
                <p style={{
                    color: 'white'
                }}>We pride ourselves in great work ethic, integrity and provide end-results</p>
  
                <Button variant='light'>Get Started</Button>
               </Container>
            </section>
        </section>
        
    </section>
  )
}

export default Intro