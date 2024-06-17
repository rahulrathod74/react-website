import React from 'react'
import CategoryCard from './CategoryCard'
const data=[
    {
       "id":0,
       "name":"Fresh Fruits",
       "count":"9 Prodct",
       "img":"/category__1.webp"
    },
    {
        "id":1,
        "name":"Fresh Vegs",
        "count":"8 Prodcts",
        "img":"/category__2.webp"
     },
     {
        "id":2,
        "name":"Canned Goods",
        "count":"10 Prodcts",
        "img":"/category__3.webp"
     },
     {
        "id":3,
        "name":"Bread & Bakery",
        "count":"12 Prodcts",
        "img":"/category__4.webp"
     },
     {
        "id":4,
        "name":"Fishes",
        "count":"10 Prodct",
        "img":"/category__5.webp"
     },
     {
        "id":5,
        "name":"Eggs & Dairy",
        "count":"7 Prodcts",
        "img":"/category__6.webp"
     },
     {
        "id":6,
        "name":"Soft Drinks",
        "count":"5 Prodcts",
        "img":"/category__7.webp"
     },
     {
        "id":7,
        "name":"Fresh Fruits",
        "count":"9 Prodcts",
        "img":"/category__1.webp"
     },
]
const Category = () => {
  return (
    <div className='container pt-16 p-10 '>
        <div className='grid grid-cols-4 gap-6 mt-[-28%]  '>
            {data.map(el=><CategoryCard key={el.id} img={el.img} name={el.name} count={el.count}/>)}
        </div>
    </div>
  )
}

export default Category