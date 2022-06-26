import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import { Navbar, Button, Table, Card,Form,Row,Col } from 'react-bootstrap'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function List()
{
    const [users, setUser] = useState([])
  useEffect(() => {
    getList()
  }, [])
  function getList() {
    fetch("http://localhost:3000/todo").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
      })
    })
  }
  function deleteUser(item) {
    fetch(`http://localhost:3000/todo/${item}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getList()
      })
    })
  }

    return(
        <div className='App'>
      
      {
          users.map((data, i) =>
            <thead>
              <tr key={i}>
                <th>
                <div class="list-group"style={{margin:'30px',width:'500px',marginLeft:'350px'}} className="App">
  <a href="#" class="list-group-item list-group-item-action active">
    {data.item}
  </a>
  </div>
                </th>

                <th>  <Button variant="danger" onClick={() => deleteUser(data.item)}>DELETE</Button> 
                </th>
              </tr>
            </thead>

          )
        }

        </div>
    )
}
export default List