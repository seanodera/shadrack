import React from 'react'
import { Row, Container, Col} from 'react-bootstrap'
import { whoWeAre } from '../Contsants';
const primaryColor = '#FF1444' ;

const About = () => {
  return (
    <section style={{
        backgroundImage: 'linear-gradient(90deg , #262626 50%, white 50%)'
    }}>
        <Row className='mx-0'>
            <Col style={{display: 'flex',
               alignItems: 'center',
               minHeight: '50vw',
               textAlign: 'start'}} sm={'2'} md={'4'}>
                  <Container>
                  <h5 style={{color: `${primaryColor}`}}>Who we are</h5>
                   <h3 style={{color: `${primaryColor}`}}>About Shedrack&amp;Co</h3>
                   <p style={{color: `white`}}>Shedrack &amp; Co is a marketing and creative agency that has pinned its primary focus on helping companies harness digital platforms to ensure relevance and results.
                   
                   We strongly believe that just having a good product is not enough to win business wars. Therefore, having a brand identity that customers resonate with serves as a key differentiation point from the competition.</p>
                  <p style={{color: `white`}}>{whoWeAre}</p>
                  </Container>
            </Col>
            <Col style={{
                display: 'flex',
                alignItems: 'center',
                height: '50vw',
                textAlign: 'start'
            }}>
            <img src='/assets/image2.webp' alt='about' style={{objectFit: 'contain', height: '37.5vw', width: '50vw', marginRight: '9vw'}}/>
            </Col>
        </Row>
        <br/>
    </section>
  )
}

export default About