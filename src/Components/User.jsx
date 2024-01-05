import React from "react";
import logo from "../assets/todoLogo.avif";
function User() {
  return (
    <div className="user p-1 flex items-center justify-around border  ">
      {/* Logo ------------ */}
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          srcset=""
          className=" w-20 h-20 rounded-full border-2 border-black"
        />
      </div>
      {/* Paragraph code  */}
      <div className="info">
        <p className=" font-bold">Todo App </p>
        <a className=" flex items-end text-blue-600">LogOut !</a>
      </div>
    </div>
  );
}

export default User;
