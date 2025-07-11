import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Navbar></Navbar>
            <div className="min-h-[calc(100vh-348px)] container mx-auto px-4" >
              <Outlet></Outlet>
            </div>
            </div>
           <Footer></Footer> 
        </div>
    );
};

export default MainLayout;