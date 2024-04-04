import React from "react";
import Link from "next/link";
import Logo from "../../../../public/next.svg";
import Image from "next/image";

function AdminNav() {
  return (
    <nav className="shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-6">
          <div className="">
            <Link href="/">
              <Image src={Logo} width={100} height={100} alt="Logo NextJS" />
            </Link>
          </div>
          <ul className="flex">

            <li className="mx-3">
              <Link href="/" className="hover:underline">
                Index
              </Link>
            </li>
            
            <li className="mx-3">
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </li>

            <li className="mx-3">
              <Link href="/register" className="hover:underline">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNav;
