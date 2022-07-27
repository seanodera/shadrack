import React from 'react'
import { Row, Col, Button, Container} from 'react-bootstrap'
import Contact from '../components/Contact';

import Service from "../components/Service";
import {BsPersonDash} from "react-icons/bs";
import Team from '../components/Team';
import About from '../components/About';
import { image1, image3, services } from '../Contsants';

const HomeScreen = () => {
    const primaryColor = '#FF1444' ;
  return (
    <div>
        <section style={{
            backgroundColor: `${primaryColor}`
        }}>
            <Row  className='mx-0'>
                <Col style={{
                   display: 'flex',
                   alignItems: 'center',
                   minHeight: '50vw',
                   width: '40vw',
                   textAlign: 'start'
                }}>
               <Container className='px-3'>
               <h5 style={{
                   color: 'white'
               }}> We Are</h5>
                <br/>
                <h3 style={{
                    color: 'white'
                }}>Shedrack&amp;Co</h3>
    
                <p style={{
                    color: 'white'
                }}>We pride ourselves in great work ethic, integrity and provide end-results</p>
  
                <Button variant='light'>Get Started</Button>
               </Container>
            
                </Col>
                <Col style={{
                    width: '60vw'
                }} xs={false}>

                <img src={image1} alt='starting' style={{
                    width: '60vw',
                    height: '50vw',
                    objectFit: 'cover'
                }}/>
                </Col>

            </Row>
        </section>
        <About/>
        <section style={{
            backgroundImage: `linear-gradient(90deg , white 60%, ${primaryColor} 40%)`
        }}>
            <Row className='mx-0'>
                <Col style={{display: 'flex',
                   alignItems: 'center',
                   height: '50vw',
                   minWidth: '50vw',
                   textAlign: 'start'}}>
                        <Container>
                        <h5 style={{color: `${primaryColor}`}}>What we do</h5>
                       <h3 style={{color: `${primaryColor}`}}>Our Services</h3>
                            <Row md={'2'} className='gx-3 gy-3'>
                                {services.map((_service) => {
                                    return <Col>
                                    <Service icon={_service.icon} text={_service.text} title={_service.title}/>
                                    </Col>
                                })}
                            </Row>
                        </Container>

                </Col>
                <Col style={{display: 'flex',
                   alignItems: 'center',
                   height: '50vw',
                   minWidth: '50vw',
                   textAlign: 'start'}}>
                <img src={image3} alt='doing' style={{height: '37.5vw', width: '37.5vw', objectFit: 'cover'}}/>
                </Col>
            </Row>
        </section>
        <br/>
        <br/>
{/* <Team/> */}
        <Contact/>
    </div>
  )
}

export default HomeScreen