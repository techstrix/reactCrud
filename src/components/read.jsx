import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function Read() {

  const [apiData,setApiData] = useState([])
const setData = (data) => {
  let {id,firstName,lastName} = data
  localStorage.setItem("ID",id)
  localStorage.setItem("firstName",firstName)
  localStorage.setItem("lastName",lastName)
}  
useEffect(() => {
  axios.get("https://65a555d252f07a8b4a3ee087.mockapi.io/fakeCrudData")
  .then(response => {
    setApiData(response.data)
  })
},[])
const updatedData = () => {
  axios.get("https://65a555d252f07a8b4a3ee087.mockapi.io/fakeCrudData")
  .then((response) => {
    setApiData(response.data)
  })
}
const onDelete = (id) => {
  axios.delete(`https://65a555d252f07a8b4a3ee087.mockapi.io/fakeCrudData/${id}`)
  updatedData()
}
  return (
    <div>
      
      <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {apiData.map((data) => {
                    return(  
                      <Table.Row>
                        <Table.Cell>
                          {data.firstName}
                        </Table.Cell>
                        <Table.Cell>
                          {data.lastName}
                        </Table.Cell>
                        <Link to="/update">
                        <Table.Cell>
                          <Button onClick={() => setData(data)}>Update
                          </Button>
                          
                          </Table.Cell>
                          </Link>

                          <Table.Cell>
                          <Button onClick={() => onDelete(data.id)}>Delete
                          </Button>
                          
                          </Table.Cell>
                      </Table.Row>
                    )
                   })}
                </Table.Body>

            </Table>



            <p>&copy; John Mburu {new Date().getFullYear()}</p>
    </div>
  )
}

export default Read