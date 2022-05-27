import React from 'react'

const Card = ({item, onAdd}) => {
  return (
    <div className='card'>
        <h2>{item.name}</h2>
        <h4>Rs.{item.price}</h4>
        <button className='btn' onClick={()=> onAdd(item)}> Add to Cart</button>
    </div>
  )
}
export default Card;
