const Header = () => {
    return (
        <div className="header">
            <span className="text-lg">TODO App</span><i className="fas fa-2x fa-list list-icon"></i>
            {/* <div className="switch-holder">
                <div className="switch-label">
                {1===1 ? <i className="fas fa-lightbulb-on"></i>:<i className="fas fa-lightbulb"></i>}<span>Dark Mode</span>
                </div>
                <div className="switch-toggle">
                    <input type="checkbox" id="mode"></input>
                    <label htmlFor="mode"></label>
                </div>
            </div> */}
        </div>
    )
}

export default Header
