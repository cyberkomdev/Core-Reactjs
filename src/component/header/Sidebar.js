
const Sidebar = (props) => {

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/#/dashboard">
                        <i className="mdi mdi-view-quilt menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#/users">
                        <i className="mdi mdi-view-quilt menu-icon"></i>
                        <span className="menu-title">Users</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#/organization">
                        <i className="mdi mdi-view-quilt menu-icon"></i>
                        <span className="menu-title">Organization</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#/team">
                        <i className="mdi mdi-view-quilt menu-icon"></i>
                        <span className="menu-title">Team</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar