import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Add()
{
    const [item, setitem] = useState("");
    function saveData() {
        let data = { item}
        axios.post('http://localhost:3000/todo', data)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))             
        setitem('')
    }
return (
    <div>
<div class="input-group mb-3" style={{marginRight:'30px'}}>
  <input type="text" class="form-control" placeholder="Add item" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => { setitem(e.target.value) }} value={item}/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" onClick={saveData}>Add item</button>
  </div>
</div>


    
    </div>
)
}
export default Add;