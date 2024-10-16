import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import styles from "@/styles/layout.module.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["layout_container"]}>
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="w-full bg-[#222] px-[24px] pt-[27px] overflow-x-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
