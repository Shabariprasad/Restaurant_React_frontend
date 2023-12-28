import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Rest_Time from './Rest_Time';
import Rest_Review from './Rest_Review';

function View_Rest() {

  const [viewRest, setviewRest] = useState({})

  //useParams -used to get path parameter from the url
  //const paraId = useParams()
  //console.log(paraId.id);//object ->id
  const { id } = useParams()
  console.log(id);

  const base_url = 'https://restaurant-backend-9ksq.onrender.com/restaurants'
  //api call to get details of the perticular restuarant using the path parameter
  const fetchRest = async () => {
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setviewRest(result.data)
  }
  console.log(viewRest); //object

  useEffect(() => {
    fetchRest()
  }, [])

  return (
    <div>
      <Row>
        <Col>
          <img src={viewRest.photograph} width={'450px'} height={'500px'} style={{ padding: '30px', margin:'40px' }} alt="" />
        </Col>
        <Col>
          <div className='p-5 m-5'>
            <ListGroup>
              <h2 className='text-center'>{viewRest.name}</h2>
              <ListGroup.Item>Address : {viewRest.address}</ListGroup.Item>
              <ListGroup.Item>Cuisine type : {viewRest.cuisine_type}</ListGroup.Item>
              <ListGroup.Item>Neighborhood : {viewRest.neighborhood}</ListGroup.Item>
              <ListGroup.Item> <Rest_Time op={viewRest.operating_hours}/> </ListGroup.Item>
              <ListGroup.Item> <Rest_Review rev={viewRest.reviews} /> </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default View_Rest