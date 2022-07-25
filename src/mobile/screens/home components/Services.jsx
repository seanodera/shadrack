import React from 'react'
import Service from '../../components/Service'
import { primaryColor } from '../../../Contsants'
import {Col, Container, Row} from 'react-bootstrap'
import {BsPersonDash} from "react-icons/bs";
import { services } from '../../../Contsants';

const Services = () => {
  return (
    <section>
        <Col style={{display: 'flex',
                   alignItems: 'center',
                   textAlign: 'start'}}>
                        <Container className='py-4'>
                        <h5 style={{color: `${primaryColor}`}}>What we do</h5>
                       <h3 style={{color: `${primaryColor}`}}>Our Services</h3>
                            <Row md={'1'} className='gx-3 gy-3'>
                            {services.map((_service) => {
                                    return <Col>
                                    <Service icon={_service.icon} text={_service.text} title={_service.title}/>
                                    </Col>})}

                            </Row>
                        </Container>

                </Col>
    </section>
  )
}

export default Services