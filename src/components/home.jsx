import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
function Home() {
    const navigate =  useNavigate()

    return (
    <div> 
  <h1> React crud Operations</h1>
    <Button onClick={() => navigate("/create")}>Create</Button>
    </div>
  )
}

export default Home