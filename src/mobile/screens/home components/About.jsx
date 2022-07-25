import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { primaryColor, whoWeAre } from '../../../Contsants'

const About = () => {
  return (
   <section style={{
    backgroundColor: '#262626'
   }}>
<Col className='py-5' style={{display: 'flex',
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
   </section>
  )
}

export default About