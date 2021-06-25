

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const nayoks = ['Asid','Raisul','khairul','Afsana'];
  const products = [
    {name:'photoShop',price:'$90.87'},
    {name:'Illustrator',price:'$56.87'},
    {name:'PDF Reader',price:'$10.87'},
    {name:'Laptop ',price:'$190.87'}
  ]

  const nayokNames = nayoks.map(nayok =>nayok);
  
  return (
    <div className="App">
      <h1>Hy first react performance</h1>

       <Users></Users>
       
       
      <Counter></Counter>
      
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        
        
       
        
      </ul>
      
      {
        products.map(pd =><Product product={pd}></Product>)
      }
        



       
      <Product product={products[0]} ></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Product product={products[3]}></Product>
      {/* <Person name="Masud"></Person>
      <Person name="Khasud"></Person>
      <Person name="Motherchod"></Person>
      <Person name="MUnna"></Person> */}

      
      
    </div>
  );
}






function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Data and API: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

    </div>
  )
}


function Counter () {
  const [count,setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  // const handleDencrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{backgroundColor:'ForestGreen'}} onClick={() => setCount(count + 1)}>Increase</button>
      <button style={{backgroundColor:'DarkCyan'}} onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
   const productStyle = {
     boder: '1px solid gray',
     borderRadius: '5px',
     backgroundColor: 'lightgray',
     height: '200px',
     width: '200px',
     float: 'left',
     padding: '10px',
     margin: '5px',
  
   }
   const {name, price} = props.product;
   console.log(name , price);
   return (
     <div style={productStyle}>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <button>Click Me</button>
     </div>
   )
}

function Person(props) {
  return (
    <div>
       <h1>{props.name}</h1>
    </div>
  )
}

export default App;
