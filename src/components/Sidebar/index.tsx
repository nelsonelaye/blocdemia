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
import settingsIcon from "@/assets/images/icons/setting.png";
import userIcon from "@/assets/images/icons/user-profile.png";

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

      <nav className="flex h-[80%] flex-col ">
        <div className="flex flex-col flex-1  ">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.link}
              className={twMerge(
                "px-[12px] py-[16px] w-full flex items-center gap-2 font-medium text-sm leading-[22px]",
                pathname === route.link && "bg-[#9633FF] rounded-[18px]"
              )}
            >
              <Image
                src={route.icon}
                alt={route.name}
                width={16}
                height={16}
                unoptimized
                quality={100}
              />
              {route.name}
            </Link>
          ))}
        </div>

        <div className="mb-4">
          <Link
            href="#"
            className={twMerge(
              "rounded-[18px] px-[12px] py-[16px] w-full text-white  font-medium text-sm leading-[22px] flex items-center gap-2",
              pathname === "#settings" && "bg-[#9633FF] "
            )}
          >
            <Image
              src={settingsIcon}
              alt="setting"
              width={16}
              height={16}
              unoptimized
              quality={100}
            />
            Settings
          </Link>
          <Link
            href="#profile"
            className={twMerge(
              "rounded-[18px] px-[12px] py-[16px] w-full  text-white  font-medium text-sm leading-[22px] flex items-center gap-2",
              pathname === "#profile" && "bg-[#9633FF] "
            )}
          >
            <Image
              src={userIcon}
              alt="user"
              width={16}
              height={16}
              unoptimized
              quality={100}
            />
            Profile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
