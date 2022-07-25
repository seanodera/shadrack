import React from 'react'
import Staff from '../../../components/Staff';
import { Row, Container} from 'react-bootstrap'
const primaryColor = '#FF1444' ;

const Team = () => {
  return (
    <section className='mt-2'>
    <h5 style={{color: `${primaryColor}`}}>Meet the staff</h5>
    <h3 >Our Team</h3>
    <br/>
<Container className='px-1'>
<Row>
        <Staff src={'/assets/image4.jpg'} name='Lisa Parker' title={'owner'}/>
        <Staff src={'/assets/image5.jpg'} name='John Walker' title={'manager'}/>
        <Staff src={'/assets/image6.jpg'} name='Dan Cooper' title={'analyst'}/>
        <Staff src={'/assets/image7.jpg'} name='Steve Doe' title={'analyst'}/>
     
    </Row>
</Container>
    <br/>
    </section>
  )
}

export default Team