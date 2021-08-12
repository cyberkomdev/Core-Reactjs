import { Redirect } from "react-router-dom";
// import Auth from "../../controller/Auths";

const Navbar = (props) => {

    const logout = () => {
        localStorage.removeItem('isToken')
        return <Redirect to="/login" />
    }

    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="/#/dashboard">
                    <img src="/images/logo.svg" alt="logo" />
                </a>
                <a className="navbar-brand brand-logo-mini" href="index.html">
                    <img src="/images/logo-mini.svg" alt="logo" />
                </a>
            </div>

            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end justify-content-lg-start">
                <button
                    className="navbar-toggler navbar-toggler align-self-center"
                    type="button"
                    data-toggle="minimize"
                >
                    <span className="mdi mdi-menu"></span>
                </button>
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="search">
                                    <i className="mdi mdi-magnify"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search"
                                aria-label="search"
                                aria-describedby="search"
                            ></input>
                        </div>
                    </li>
                </ul>

                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/#/" data-toggle="dropdown">
                            <i className="mdi mdi-bell-outline mx-0"></i>
                            <span className="count"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <a className="dropdown-item" href="/#/">
                                <p className="mb-0 font-weight-normal float-left">
                                    You have 4 new notifications
                                </p>
                                <span className="badge badge-pill badge-warning float-right">View all</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item" href="/#/">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-success">
                                        <i className="mdi mdi-information mx-0"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-medium">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0">
                                        Just now
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>

                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="/#/" data-toggle="dropdown" id="profileDropdown">
                            <img src="https://via.placeholder.com/30x30" alt="profile" />
                            <span className="nav-profile-name">Evan Morales</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item" href="/#/">
                                <i className="mdi mdi-settings text-primary"></i>
                                Settings
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#/login" onClick={logout}>
                                <i className="mdi mdi-logout text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
