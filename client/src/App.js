import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Axios } from 'axios';

function App() {
const [name,setName] = useState("");
const [quantity,setQuantity] = useState(0);

//func

const addProducts = () => {
  Axios.post('http://localhost:3001/create',{
    name: name,
  quantity: quantity
}).then(() =>{
  console.log("Success");
});
};

const displayInfo = () =>{
console.log(name + quantity);
};


  return (
    <div className="App">
      <div className='info'>
      <h1>Storage Management</h1>
      <label>Name</label>
      <input type="text" placeholder='Product name' onChange={(event)=> {
        setName(event.target.value);
      }} 
      />
      <label>Quantity</label>
      <input type="number" placeholder='Product quantity' onChange={(event) => {setQuantity(event.target.value);}}
      />
      <button onClick={addProducts}>Add product</button>
      
      </div>
    </div>
  );
}

export default App;
