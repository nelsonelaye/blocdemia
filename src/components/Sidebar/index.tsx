"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import { routes } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiSettings2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[205px] bg-[#1a1a1a] h-full px-3 pt-4 overflow-hidden">
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
        <div className="flex flex-col flex-1 flex-grow ">
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
        </div>

        <div className="mb-4">
          <Link
            href="#"
            className={twMerge(
              "rounded-[18px] px-[12px] py-[16px] w-full text-white  font-medium text-sm leading-[22px] flex items-center gap-2",
              pathname === "#settings" && "bg-[#9633FF] "
            )}
          >
            <RiSettings2Line fontSize={16} />
            Settings
          </Link>
          <Link
            href="#profile"
            className={twMerge(
              "rounded-[18px] px-[12px] py-[16px] w-full  text-white  font-medium text-sm leading-[22px] flex items-center gap-2",
              pathname === "#profile" && "bg-[#9633FF] "
            )}
          >
            <HiOutlineUser fontSize={16} />
            Profile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
