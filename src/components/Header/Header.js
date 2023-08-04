import React from "react";

const Header = ({ head, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" font-extrabold mt-10 text-black">{head}</h2>
      <h1 className="text-xl text-black  font-extrabold sm:text-3xl">
        {title}
      </h1>
      <hr class="w-20 h-2 mx-auto   border-0 my-2 bg-pink" />
        <p className="text-lg w-[50rem] text-center mt-5 mb-5 text-black/70">{description}</p>
    </div>
  );
};

export default Header;
