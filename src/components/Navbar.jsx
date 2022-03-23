import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <>
    {links.map((link,index)=>{
      return <Link key={index} to={link.link}>{link.title}</Link>
    })}
    </>
  );
};
