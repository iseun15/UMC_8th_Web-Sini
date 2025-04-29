import { Outlet } from 'react-router-dom';
import {Navbar} from '../../components/Navbar';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-center">
            <Navbar />
            <div className="w-full max-w-screen-xl px-4">
            <Outlet />
            </div>
        </div>
    )
}

export default HomePage;