import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Rest_Card from './Rest_Card'


function AllRest() {

  //api fetch 

  const base_url='https://restaurant-backend-9ksq.onrender.com/restaurants'

  const [AllRestData,setAllRestData] = useState([]) //to hold the array of restuarant data

  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data); //array(10)
    setAllRestData(result.data)
  }

  console.log(AllRestData); //array(10)

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
              <Rest_Card restuarant={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest