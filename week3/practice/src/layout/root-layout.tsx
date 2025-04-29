import {Outlet} from "react-router-dom";
import Navbar from "../component/navbar.js";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default RootLayout