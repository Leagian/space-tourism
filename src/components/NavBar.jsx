import React from "react";
import Link from "next/link";
import Home from "@/app/page";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "DESTINATION", path: "/destination" },
  { name: "CREW", path: "/crew" },
  { name: "TECHNOLOGY", path: "/technology" },
];

function NavBar() {
  return (
    <div>
      <header className="flex justify-between ">
        <Link href="/">
          <Image src={logo} alt="logo space tourism" />
        </Link>
        <nav className=" bg-slate-900">
          <ul className="flex gap-2  p-5">
            {navLinks.map((link, index) => (
              <li key={index} className="text-neutral-100">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
