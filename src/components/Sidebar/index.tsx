"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import { routes } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[205px] bg-[#1a1a1a] h-screen px-3 pt-4">
      <div className="pl-[9px] mb-[36px]">
        <Image
          src={logo}
          alt="Blocdemia logo"
          width={100}
          height="50"
          className="w-[130px] h-[30px]"
        />
      </div>

      <nav className="flex flex-col ">
        {routes.map((route) =>
          pathname === route.link ? (
            <Link
              key={route.name}
              href={route.link}
              className=" bg-[#9633FF] rounded-[18px] px-[12px] py-[16px] w-full  font-medium text-sm leading-[22px]"
            >
              {route.name}
            </Link>
          ) : (
            <Link
              key={route.name}
              href={route.link}
              className="px-[12px] py-[16px] w-full  font-medium text-sm leading-[22px]"
            >
              {route.name}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
