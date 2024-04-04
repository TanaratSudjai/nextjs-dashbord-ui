import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/vercel.svg'
import Image from 'next/image'

function Navber() {
  return (
    <div className='shadow-xl'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4 shadow-lg">
            <div className="">
                <Link href="/"> 
                    <Image src={Logo} width={50} height={50} alt='logo Next js' />
                </Link>
            </div>
            <ul className='flex'>
                <li className='mx-3 hover:underline'> <Link href="/" >Index</Link></li>
                <li className='mx-3 hover:underline'> <Link href="/admin" >Manage</Link></li>
                <li className='mx-3 hover:underline'><Link href="/login">Login</Link></li>
                <li className='mx-3 hover:underline'><Link href="/register">Register</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navber
