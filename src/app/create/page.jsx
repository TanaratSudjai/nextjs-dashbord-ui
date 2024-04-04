import React from "react";
import Navber from "../components/Navber";
import Container from "../components/Container";
import Link from "next/link";

function CreatePage() {
  return (
    <Container>
      <Navber />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-1 p-8 rounded-xl">
          <Link
            href="/welcome"
            className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2"
          >
            Go back
          </Link>
          <hr className="my-3" />
          <h3 className="text-xl">Create Post</h3>

          <form action="">
            <div className="flex flex-col">
              <input
                type="text"
                className="w-[300px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                placeholder="Post title"
              />
              <input
                type="text"
                className="w-[300px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                placeholder="Post Img Url"
              />
              <textarea
                className="w-[300px] bolck bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your post content"
              ></textarea>
              <button
                type="submit"
                name="create"
                className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2 w-[300px]"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default CreatePage;
