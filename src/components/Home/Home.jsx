import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Home = () => {

    return (
        <div>
            <h2>This is the home components</h2>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;