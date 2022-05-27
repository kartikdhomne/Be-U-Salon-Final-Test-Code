import Home from './Components/Home'
import './App.css';
import Cart from './Components/Cart'
import {useState} from "react";


function App({products}) {
  const [cartItem, setCartItem]= useState([]);
  const onAdd=(product)=>{
    const exist = cartItem.find((x)=> x.id === product.id)
    if(exist){
      setCartItem(cartItem.map((x)=>{
       return x.id === product.id ? {...exist, qty: exist.qty + 1} : x
      }))
    }else {
      setCartItem([...cartItem, {...product, qty: 1}]
      )
    }
  }

  const onRemove=(product)=>{
    const exist = cartItem.find((x)=> x.id === product.id)
    if(exist.qty ===1){
      setCartItem(cartItem.filter((x)=>
        x.id !== product.id
      ))}
      else{
        setCartItem(cartItem.map((x)=>{
          return x.id === product.id ? {...exist, qty: exist.qty - 1} : x
         }))
      }
    }
    return (
      <div className="App">
       <Home onAdd={onAdd} products={products} />
      <Cart onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />
      </div>
    );
  }

  export default App;
