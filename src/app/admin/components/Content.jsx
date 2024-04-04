import React from "react";
import { FaUser, FaRegNewspaper } from "react-icons/fa6";

function Content() {
  return (
    <div className="p-10 rounded-lg">
      <div className="flex">
        <div className="shadow-lg w-[300px] m-5 p-10 rounded-lg ">
          <h3 className="flex items-center">
            <FaUser className="mr-2" /> Total User
          </h3>
          <hr className="border-[1px] mt-5" />
          <p className="text-5xl mt-10 text-blue-500">29</p>
        </div>

        <div className="shadow-lg w-[300px] m-5 p-10 rounded-lg">
          <h3 className="flex items-center">
            <FaRegNewspaper className="mr-2" /> Total Posts
          </h3>
          <hr className="border-[1px] mt-5" />
          <p className="text-5xl mt-10 text-blue-500">52</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        dicta magnam adipisci! Atque totam cum esse. Non aliquid repellendus
        ipsa, beatae ad incidunt id quos expedita debitis, porro et. Quo.
      </p>
    </div>
  );
}

export default Content;
