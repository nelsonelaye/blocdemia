import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import styles from "@/styles/layout.module.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["layout_container"]}>
      <Sidebar />
      <div className="w-full h-full overflow-auto flex-1">
        <Header />
        <div className="w-full h-full overflow-y-scroll   bg-[#222] px-[24px] over">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
