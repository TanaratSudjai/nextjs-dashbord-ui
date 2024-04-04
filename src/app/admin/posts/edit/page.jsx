import React from "react";
import AdminNav from "../../components/AdminNav";
import Container from "../../components/Container";
import Link from "next/link";

function EditPage() {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-1 p-8 rounded-xl">
          <Link
            href="/admin/users"
            className="bg-slate-500 rounded-full inline-block text-white shadow-lg ] border py-2 px-3  my-2"
          >
            X
          </Link><span className="font-bold mx-2">Back</span>
          <hr className="my-3" />
          <h3 className="text-xl">Admin Edit User Post</h3>
          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="w-[500px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post title"
              value="title before update"
            />
            <input
              type="text"
              className="w-[500px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Img Url"
              value="https://images.com"
            />
            <textarea
              className="w-[500px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your post content"
            >
              Content before update
            </textarea>
            <button
              type="submit"
              name="update"
              className="bg-blue-400 text-white border py-2 px-3 rounded text-lg my-2 w-[500px]"
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default EditPage;
