import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;