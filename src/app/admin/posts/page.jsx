import React from "react";
import AdminNav from "../components/AdminNav";
import Container from "../components/Container";
import SideNav from "../components/SideNav";
import Link from "next/link";
import Image from 'next/image';

function page() {
  return (
    <div>
      <Container>
        <AdminNav></AdminNav>
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="flex mt-10">
              <SideNav />
              <div className="p-10">
                <h3 className="text-3xl mb-3">Manage User</h3>
                <p>A list of post retrieved from a MongoDB database</p>

                <div className="shadow-ls overflow-auto">
                  <table className="text-left rounded-md mt-3 table-fixed w-full">
                    <thead>
                      <tr className="bg-blue-300 text-center" >
                        <th className="p-3 border-[1px]">Post ID</th>
                        <th className="p-3 border-[1px]">Post Title</th>
                        <th className="p-3 border-[1px]">Post Image</th>
                        <th className="p-3 border-[1px]">Post Content</th>
                        <th className="p-3 border-[1px]">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="p-5">$0288811-726</td>
                            <td className="p-5">This is post title</td>
                            <td className="p-5">
                                <Image
                                    className="my-3 rounded-md"
                                    src="https://images.unsplash.com/photo-1573167101669-476636b96cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXR8ZW58MHx8MHx8fDA%3D"
                                    width={80}
                                    height={80}
                                    alt="post image"
                                />  
                            </td>
                            <td className="p-5">This is  Post Content</td>
                            <td className="p-5">
                                <Link className="text-black border py-2 px-3 bg-gray-300 text-lg rounded my-2 mx-1 hover:bg-gray-400" href="/admin/posts/edit">Edit</Link>
                                <Link className="text-white border py-2 px-3 bg-red-400 text-lg rounded my-2 mx-1 hover:bg-red-700" href="/admin/posts/delete">delete</Link>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default page;
