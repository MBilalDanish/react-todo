import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <Link className="nav-link home text-primary" to="/"><i className="fas fa-home"></i></Link>
                <Link className="nav-link posts text-secondary" to="/posts"><i className="fas fa-th-large"></i></Link>
                <Link className="nav-link counter text-success" to="/counter"><i className="fas fa-clock"></i></Link>
                <Link className="nav-link about text-dark" to="/about"><i className="fas fa-info-circle"></i></Link>
                <Link className="nav-link map-gl text-warning" to="/map-gl"><i className="fas fa-map"></i></Link>
                <Link className="nav-link m-ui text-danger" to="/material-ui"><i className="fas fa-window-restore"></i></Link>
                <Link className="nav-link hoc text-info" to="/hoc"><i className="fas fa-sitemap"></i></Link>
                <Link className="nav-link hoc text-info" to="/stories"><i className="fas fa-newspaper"></i></Link>
            </div>
        </div>
    )
}

export default Header
