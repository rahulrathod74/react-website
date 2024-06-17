import { comment } from 'postcss'
import React from 'react'
import BlockCard from './BlockCard'
const data=[
    {
        id:"0",
        img:"post__1.webp",
        name:"Healthy Food healthy Life",
        date:"Aug 27,2023",
        comment:8,
    },
    {
        id:"1",
        img:"post__2.webp",
        name:"Healthy Food healthy Life",
        date:"Aug 25,2023",
        comment:1,
    },
    {
        id:"2",
        img:"post__3.webp",
        name:"jewel Cranberries",
        date:"Aug 30,2023",
        comment:6,
    },
    
]
const BlockSection = () => {
  return (
    <div className='container pt-16 pl-10 pr-10'>
        <h2 className='font-bold text-gray-500'>Latest News</h2>
        <p className='text-gray-500'>
            Present posts in a best way to highlight interesting moments of your blog.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map(el=><BlockCard key={el.id} img={el.img} name={el.name} date={el.date} comment={el.comment}  />)}
        </div>
    </div>
  )
}

export default BlockSection