import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import styles from "@/styles/layout.module.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["layout_container"]}>
      <Sidebar />
      <div
        className="w-full h-full relative"
        style={{
          paddingLeft: "205px",
        }}
      >
        <Header />
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
