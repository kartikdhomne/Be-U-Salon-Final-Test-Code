import React from 'react'
import Card from './Card';
import data from './data'

 const Home = ({onAdd}) => {
  return (
    <div className='home'>
    {data.products.map((item, index)=>{
        return <Card key={index} item={item} onAdd={onAdd}/>
    })}
    </div>
  )
}
export default Home;
