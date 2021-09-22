import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <Link className="nav-link home" to="/"><i className="fas fa-home"></i></Link>
                <Link className="nav-link about" to="/posts"><i className="fas fa-th-large"></i></Link>
                <Link className="nav-link about" to="/postsn"><i className="fab fa-accusoft"></i></Link>
                <Link className="nav-link about" to="/counter"><i className="fas fa-clock"></i></Link>
                <Link className="nav-link about" to="/about"><i className="fas fa-info-circle"></i></Link>
            </div>
        </div>
    )
}

export default Header
