import {Link} from "react-router-dom"  //Link 태그 : 원하는 경로로 페이지 이동

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>홈 페이지로 이동</Link>
            <Link to={'/movies'}>영화 페이지로 이동</Link>
        </nav>
    );
};

export default Navbar;