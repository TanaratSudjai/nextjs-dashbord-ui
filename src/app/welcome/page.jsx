import React from "react";
import Navber from "../components/Navber";
import Container from "../components/Container";
import Link from "next/link";
import Image from "next/image";

function WelcomePage() {
  return (
    <div>
      <Container>
        <Navber />
        <div className="flex-grow">
          <div className="container mx-auto shadow-xl my-3 p-10 rounded-xl">
            <div className="flex justify-between">
              <div>
                <h3 className="text-3xl ">Profile</h3>
                <p>Welcome, Admin</p>
              </div>
              <div className="">
                <Link
                  href="create"
                  className="bg-blue-400 text-white border py-2 px-3 rounded-md text-lg my-2"
                >
                  Create Post
                </Link>
              </div>
            </div>
            {/* User post data */}
            <div className="flex justify-center">
              <div className="shadow-xl my-10 p-10 rounded-xl flex flex-col justify-center items-center w-[800px]">
                <h4 className="text-2xl">Post title</h4>
                <Image
                  className="my-3 rounded-md"
                  src="https://images.unsplash.com/photo-1573167101669-476636b96cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXR8ZW58MHx8MHx8fDA%3D"
                  width={500}
                  height={100}
                  alt="Post image"
                />
                <p className="w-[70%] font-serif">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita doloribus hic cum laboriosam ipsam asperiores, ad
                  consectetur nostrum odit blanditiis ab et possimus ipsa
                  ratione nam illum, corrupti similique obcaecati.
                </p>
                <div className="mt-5">
                  <Link
                    className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                    href="/edit"
                  >
                    Edit
                  </Link>
                  <Link
                    className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                    href="/delete"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="shadow-xl my-10 p-10 rounded-xl flex flex-col justify-center items-center w-[800px]">
                <h4 className="text-2xl">Post title</h4>
                <Image
                  className="my-3 rounded-md"
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={100}
                  alt="Post image"
                />
                <p className="w-[70%] font-serif">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita doloribus hic cum laboriosam ipsam asperiores, ad
                  consectetur nostrum odit blanditiis ab et possimus ipsa
                  ratione nam illum, corrupti similique obcaecati.
                </p>
                <div className="mt-5">
                  <Link
                    className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                    href="/edit"
                  >
                    Edit
                  </Link>
                  <Link
                    className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                    href="/delete"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WelcomePage;
