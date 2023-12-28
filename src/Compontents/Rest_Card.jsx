import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Rest_Card({ restuarant }) {
  console.log(restuarant);
  return (
    <div>
      <Link to={`view/${restuarant.id}`} style={{textDecoration:'none'}}>
      <MDBCard className='my-3 mx-3' style={{ height: '500px' }}>
        <MDBCardImage src={restuarant.photograph} height={'350px'} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{restuarant.name}</MDBCardTitle>
          <MDBCardText>
            {restuarant.address}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </Link>
    </div>
  )
}

export default Rest_Card