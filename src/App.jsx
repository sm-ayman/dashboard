import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./componnets/Navbar/Navbar";
import Sidebar from "./componnets/Sidebar/Sidebar";
import Footer from "./componnets/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-1">
        <Sidebar></Sidebar>

        <main className="flex-1 bg-gray-300 p-6">
          <Outlet></Outlet>
        </main>
      </div>
      <Footer class="h-16 bg-gray-800 text-white flex items-center justify-center" />
    </div>
  );
}

export default App;
