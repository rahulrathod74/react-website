import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCountBadge from './CartCountBadge';
const Navbar = () => {
  return (
    <div className='container hidden lg:block'>
        <div className='flex justify-around items-center pt-8'>
            <h1 className='text-4xl font-medium'>Logo</h1>
            <div className='relative w-full max-w-[500px]'>
                <input className='bg-[#f2f3f5] border-none outline-none px-6 py3 rounded-[30px] w-full h-10' type="text" placeholder='Search Product...'/>
                <IoSearchSharp className='absolute top-0 right-0 mt-3 mr-5 text-gray-500 size-{20}'/>     
            </div>
            <div className='flex gap-4  '>
                <div className='icon_wrapper'>
                    <LuUser2/>
                </div>
                <div className='icon_wrapper relative'>
                    <MdOutlineShoppingCart/>
                    <CartCountBadge />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar