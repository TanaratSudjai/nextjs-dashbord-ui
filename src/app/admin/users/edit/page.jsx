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
        <div className="container mx-auto my-1 p-8 rounded-xl">
          <Link
            href="/admin/users"
            className="bg-slate-500 rounded-full inline-block text-white shadow-lg ] border py-2 px-3  my-2"
          >
            X
          </Link>
          <span className="font-bold mx-2">Back</span>
          <hr className="my-3" />
          <h3 className="text-xl">Admin Edit User</h3>

          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="w-[500px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Username"
            />
            <input
              type="text"
              className="w-[500px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-[500px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Password"
            />
            <button
              type="submit"
              name="update"
              className="bg-blue-400 text-white border py-2 px-3 rounded text-lg my-2 w-[500px]"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default page;
