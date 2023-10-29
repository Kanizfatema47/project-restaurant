import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer"
const Main = () => {
    return (
        <div className="max-w-screen-xl	mx-auto max-h-screen">
            <Navbar/>
            <Outlet></Outlet>
            
            <Footer/>
        </div>
    );
};

export default Main;