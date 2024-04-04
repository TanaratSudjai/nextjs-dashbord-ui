import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/next.svg'
import Image from 'next/image'

function Navber() {
  return (
    <div className='shadow-xl'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
            <div className="">
                <Link href="/"> 
                    <Image src={Logo} width={100} height={100} alt='logo Next js' />
                </Link>
            </div>
            <ul className='flex'>
                <li className='mx-3'><Link href="/login">Login</Link></li>
                <li className='mx-3'><Link href="/register">Register</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navber