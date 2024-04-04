import React from "react";
import AdminNav from "../components/AdminNav";
import Container from "../components/Container";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import Link from "next/link";

function page() {
  return (
    <div>
      <Container>
        <AdminNav></AdminNav>
        <div className="flex-grow ">
          <div className="container mx-auto">
            <div className="flex mt-10 px-10">
              <SideNav />
              <div className="p-10">
                <h3 className="text-3xl mb-3">Manage User</h3>
                <p>A list of Users retrieved from a MongoDB database</p>

                <div className="shadow-ls overflow-auto w-[1000px]">
                  <table className="text-left rounded-md mt-3 table-fixed w-full">
                    <thead>
                      <tr className="bg-blue-300 text-center">
                        <th className="p-2 border-[1px]">ID</th>
                        <th className="p-2 border-[1px]">Username</th>
                        <th className="p-2 border-[1px]">Email</th>
                        <th className="p-2 border-[1px]">Password</th>
                        <th className="p-2 border-[1px]">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="p-2">$0288811-726</td>
                            <td className="p-2">@John Doe</td>
                            <td className="p-2">Thxx02@gmail.com</td>
                            <td className="p-2">$0288811@2024</td>
                            <td className="p-2">
                                <Link className="text-black  border py-2 px-3 bg-gray-200  text-lg rounded my-2 mx-1 hover:bg-gray-400" href="/admin/users/edit">Edit</Link>
                                <Link className="text-white border py-2 px-3 bg-red-400 text-lg rounded my-2 mx-1 hover:bg-red-700" href="/admin/users/delete">delete</Link>
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
