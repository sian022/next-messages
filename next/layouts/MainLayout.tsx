import Sidebar from "@/components/Containers/Sidebar";
import React, { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex gap-4 p-4 bg-slate-50">
      <Sidebar />

      {children}
    </div>
  );
};

export default MainLayout;
