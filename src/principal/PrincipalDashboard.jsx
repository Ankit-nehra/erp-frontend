import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
//-------------------------- student context (yaha pr data store hoga student ka iss file me )------
import { PrincipalProvider } from "../context/PrincipalContext";

function PrincipalDashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    
    <div className="min-h-screen flex bg-slate-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {openSidebar && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpenSidebar(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 z-50 md:hidden">
            <Sidebar
              mobile
              setOpenSidebar={setOpenSidebar}
            />
          </div>
        </>
      )}

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        {/* <PrincipalProvider> */}
        <Navbar setOpenSidebar={setOpenSidebar} />
        {/* </PrincipalProvider> */}
        {/* Dynamic Page */}
        <main className="flex-1 p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>

  );
}

export default PrincipalDashboard;