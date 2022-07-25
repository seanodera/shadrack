import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Staff = ({src, name, title}) => {
  return (
    <Col style={{textAlign: 'start'}}>
    <Card>
        <Card.Img variant='top' src={src} alt='person' style={{objectFit: 'cover'}}/>
        <Card.Body>
           
        <div style={{display: 'flex'}}>

        <Container style={{}} className='px-0 mx-0'>
               <Card.Title>{name}</Card.Title>
            <Card.Text>{title}</Card.Text>
               </Container>
           <p>
            <AiOutlineTwitter/>
            <AiOutlineFacebook/>
            <AiOutlineInstagram/>
            </p>
        </div>
        </Card.Body>
    </Card>
    </Col>
  )
}

export default Staff