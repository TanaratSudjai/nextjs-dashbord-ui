import React from "react";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Link from "next/link";

function LoginPage() {
  return (
    <div>
      <Container>
        <Navber></Navber>
        <div className="flex-grow">
          <div className="flex justify-center items-center">
            <div className="w-[400px] shadow-xl p-10 mt-5 rounded-xl">
              <h3 className="text-3xl">Login</h3>
              <hr className="my-3" />
              <form action="">
                <input
                  type="text"
                  className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                  name=""
                  id=""
                  placeholder="Enter your password"
                />
                <button
                  className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2"
                  type="submit"
                >
                  Sing In
                </button>
                <hr className="my-3" />
                <p>
                  Do not have an accout? Go to{" "}
                  <Link
                    href="/register"
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
