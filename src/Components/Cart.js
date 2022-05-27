import React from 'react'

 const Cart = ({cartItem, onAdd, onRemove}) => {
     const itemPrice = cartItem.reduce((a,c)=> a + c.qty * c.price, 0)
  return (
    <div className='cart'>
    <h1>Cart</h1>
    <div>{cartItem.length === 0 && <div> Cart is empty</div>}</div>
    {cartItem.map((item, index)=>{
         return <div key={index} className="cart_body">
         <div><strong>{item.name}</strong></div>
         <div>
         <button className='btn_1' onClick={()=>onAdd(item)}>+</button>&nbsp;
        <button className='btn_2' onClick={()=>onRemove(item)}>-</button>
         </div>
       <div>
          Price : {item.price} &nbsp; Qty * {item.qty}
       </div>
       <hr />
        </div>
    })}
    <hr />
    <div><b>Total </b>: {itemPrice}</div>
    </div>
  )
}
export default Cart;
