import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Dsb from "../../../../public/dashboard.svg";
import Post from "../../../../public/post.svg";
import User from "../../../../public/user.svg";


function SideNav() {
  return (
    <nav className='shadow-lg p-10 rounded-lg'>
      <ul>
        <li className=' flex flex-col justify-center items-center gap-2'><Link className='block my-3 p-3 text-center rounded-lg hover:underline' href="/admin"><Image src={Dsb} width={80} height={0} /><span className=' font-bold  hover:underline '>Dashboard</span></Link></li>
        <li className=' flex flex-col justify-center items-center gap-2'><Link className='block my-3 p-3 text-center rounded-lg hover:underline' href="/admin/users"><Image src={User} width={70} height={0} /><span className=' font-bold  hover:underline '>User</span></Link></li>
        <li className=' flex flex-col justify-center items-center gap-2'><Link className='block my-3 p-3 text-center rounded-lg hover:underline' href="/admin/posts"><Image src={Post} width={70} height={0} /><span className=' font-bold  hover:underline '>Post</span></Link></li>
      </ul>
    </nav>
  )
}

export default SideNav
