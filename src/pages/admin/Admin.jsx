import React from "react";
import AdminSidebar from "../../components/admin/adminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
