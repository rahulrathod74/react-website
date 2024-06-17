import React from 'react'

const BlockCard = ({img,name,date,comment}) => {
  return (
    <div className='space-y-4'>
        <img className='rounded-lg hover:scale-105  transition-transform' src={img} alt="" />

        <div className='text-accent font-medium'>
            <span>{date}/</span>
            <span>{comment} Comments</span>
        </div>
        <h3 className='font-bold' text-xl>{name}</h3>
    </div>
  )
}

export default BlockCard