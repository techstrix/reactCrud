import React from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function Create() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const history = useNavigate()

  function PostData(){
    return axios.post("https://65a555d252f07a8b4a3ee087.mockapi.io/fakeCrudData",{firstName,lastName}) 
    .then(() => {
      history("/read")
    })
  } 
    

   return (
    <div>
      <h1>React Crud</h1>
    <Form className='createForm'>
    <FormField>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)}/>
    </FormField>
    
    <Button type='submit' onClick={PostData}>Submit</Button>
  </Form>
  <p>&copy; John Mburu {new Date().getFullYear()}</p>
    </div> 
  )
}

export default Create