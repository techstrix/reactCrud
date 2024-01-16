import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
function Update() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const ID = localStorage.getItem("ID")
  let nameOne = localStorage.getItem("firstName")
  let nameTwo = localStorage.getItem("lastName")
  const navigate = useNavigate()
  
  const updateAPIData = () => {
  //  return axios.put(`https://65a555d252f07a8b4a3ee087.mockapi.io/fakeCrudData/${ID}`,{firstName,lastName})

  if(firstName === localStorage.getItem("firstName") && lastName === localStorage.getItem("lastName")){
    navigate("/read")
  }

    
    axios.put(`https://65a555d252f07a8b4a3ee087.mockapi.io/fakeCrudData/${ID}`,{firstName,lastName})
 navigate("/read")


  
    
}
  return (
    <div>
      
      <Form className='createForm'>
    <FormField>
      <label>First Name</label>
      <input placeholder='First Name'  defaultValue={nameOne} onChange={(e) => setFirstName(e.target.value)} />
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input placeholder='Last Name' defaultValue={nameTwo}  onChange={(e) => setLastName(e.target.value)}/>
    </FormField>
    
    <Button type='submit' onClick={updateAPIData}>Update</Button>
    </Form>
    <p>&copy; John Mburu {new Date().getFullYear()}</p>
    </div>
  )
}

export default Update