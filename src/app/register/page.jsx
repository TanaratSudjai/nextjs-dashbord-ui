import React from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'

function RegisterPage() {
  return (
    <div>
      <Navber></Navber>
        <div className="flex-grow">
            <div className="flex justify-center items-center">
                <div className="w-[400px] shadow-xl p-10 mt-5 rounded-xl">
                    <h3 className='text-3xl'>Login</h3>
                    <hr className='my-3' />
                    <form action="">
                        <input type="text" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' name="" id="" placeholder='Enter your name' />
                        <input type="text" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' name="" id="" placeholder='Enter your email' />
                        <input type="password" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' name="" id="" placeholder='Enter your password' />
                        <input type="password" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' name="" id="" placeholder='Cpnfirm your password' />
                        <button className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2' type='submit'>Sing Up</button>
                        <hr className='my-3' />
                        <p>
                            Already have an account? Go to <Link href="/login" className='text-blue-500 hover:underline'>Sing In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default RegisterPage
