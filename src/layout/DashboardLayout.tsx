import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import styles from "@/styles/layout.module.css";
import { twMerge } from "tailwind-merge";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  console.log(openSidebar);
  return (
    <div className={styles["layout_container"]}>
      <div
        className="max-sm:hidden"
        style={{
          display: openSidebar ? "block" : "",
        }}
      >
        <Sidebar />
      </div>
      <div
        className={twMerge(
          "w-full h-full relative",
          styles["dashboard_content"]
        )}
        onClick={() => {
          if (openSidebar) {
            setOpenSidebar(false);
          }
        }}
      >
        <Header setOpenSidebar={setOpenSidebar} />
        <div
          className="w-full h-full  bg-[#222] px-[24px]"
          style={{
            paddingTop: 94,
            paddingBottom: 24,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
