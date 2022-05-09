import React from 'react'
import {Container} from "react-bootstrap";

const Service = ({icon, title, text}) => {
  return (
    <Container style={{
        maxHeight: '160px',
        overflow: 'hidden'
    }}>
     <h5> {icon}</h5>
      <h6>{title}</h6>
      <p>{text}</p>
    </Container>
  )
}

export default Service