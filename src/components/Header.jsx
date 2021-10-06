import { Link} from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <div className="nav">

                <Link className="animate__animated animate__rotateIn nav-link home text-primary" to="/home"><i className="fas fa-home"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link posts text-secondary" to="/posts"><i className=" fas fa-th-large"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link counter text-success" to="/counter"><i className="fas fa-clock"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link about text-dark" to="/about"><i className="fas fa-info-circle"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link map-gl text-warning" to="/map-gl"><i className="fas fa-map"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link m-ui text-danger" to="/material-ui"><i className="fas fa-window-restore"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link hoc text-info" to="/hoc"><i className=" fas fa-sitemap"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link hoc text-info" to="/stories"><i className="fas fa-newspaper"></i></Link>
                <Link className="animate__animated animate__rotateIn nav-link hoc text-danger" to="/styled"><i className="fas fa-paint-brush"></i></Link>


            </div>
        </div>
    )
}

export default Header
