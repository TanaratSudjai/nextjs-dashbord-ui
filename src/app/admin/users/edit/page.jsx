import React from "react";
import AdminNav from "../../components/AdminNav";
import Container from "../../components/Container";
import SideNav from "../../components/SideNav";
import Link from "next/link";

function page() {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
      <div className="container mx-auto shadow-xl my-1 p-8 rounded-xl">
                    <Link href="/admin/users" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go back</Link>
                    <hr className="my-3" />
                    <h3 className='text-xl'>Admin Edit User</h3>
                    
                    <form action="">
                    <div className="flex flex-col">
                        <input type="text" className='w-[300px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Username'/>
                        <input type="text" className='w-[300px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Email'/>
                        <input type="password" className='w-[300px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Password'/>
                        <button type='submit' name='update' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2 w-[300px]'>Update User</button>
                        </div>
                    </form>
                   
                </div>
      </div>
    </Container>
  );
}

export default page;
