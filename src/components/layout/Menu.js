import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions'

class Menu extends React.Component {
    state = {
        stickyClass: 'rox-header-menu header-sticky',
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    // componentWillMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    // componentWillUnmount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    handleScroll = (event) => {
        if (window.pageYOffset > 120) {
            this.setState({
                stickyClass: 'rox-header-menu header-sticky sticky'
            })
        } else {
            this.setState({
                stickyClass: 'rox-header-menu header-sticky'
            })
        }
    }
    render() {
        return (
            <div className={this.state.stickyClass} id="header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-12">
                            <div className="rox-logo">
                                <Link to='/'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/headerlogo.png`} alt="Site Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-12">
                            <div className="header-inner">
                                <nav className="main-menu">
                                    <ul className="navbar-nav nav">
                                        <li className="rox-dropdown nav-item"> <Link to="#" className="nav-link">Parks & Tickets <i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                                            <ul className="rox-dropdown-menu">
                                                <div className="park-list-dropdown">
                                                    <div className="menga-menu-park-list">
                                                        <li className="megamenu">	<span>Theme Parks</span>
                                                            <div className="megamenu-item">
                                                                <Link to="/fantasy-kingdom" className="single-park">
                                                                    <span>Fantasy Kingdom</span>
                                                                    <p>Open, 10 am- 11 pm</p>
                                                                </Link>
                                                                <Link to="/foys-lake" className="single-park">	<span>Foys Lake</span>
                                                                    <p>Open, 10 am- 11 pm</p>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li className="megamenu">	<span>Water Parks</span>
                                                            <div className="megamenu-item">
                                                                <Link to="/water-kingdom" className="single-park">	<span>Water Kingdom</span>
                                                                    <p>Open, 10 am- 11 pm</p>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li className="megamenu">	<span>Other parks</span>
                                                            <div className="megamenu-item">
                                                                <Link to="/extreme-racing" className="single-park">	<span>Extreme Racing</span>
                                                                    <p>Open, 10 am- 11 pm</p>
                                                                </Link>
                                                            </div>
                                                            <div className="megamenu-item">
                                                                <Link to="/heritage-park" className="single-park">	<span>Heritage Park</span>
                                                                    <p>Open, 10 am- 11 pm</p>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </div>
                                                    <div className="menu-menu-park-btn mt-5 mb-3">	<Link to="/things-to-do" className="theme-btn">View Events</Link>
                                                        <Link to="/ticket" className="theme-btn">Buy Tickets</Link>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item"> <Link to="/things-to-do" className="nav-link">Things To Do</Link></li>
                                        <li className="nav-item"> <Link to="/atlantis" className="nav-link">Places to stay</Link></li>
                                        <li className="nav-item"> <Link to="/ticket" className="nav-link">Offers</Link>
                                        </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/faq">FAQ</Link>
                                        </li>
                                        <li className="nav-item search-header-btn"><Link className="nav-link" to="#search"><i className="fa fa-search"></i></Link>
                                        </li>
                                        <Cart />
                                        <li className="nav-item">
                                            {this.props.auth.isAuth ?
                                                <span className="signup-btn link-btn" onClick={() => this.props.logout(this.props.history)} >Sign Out</span>
                                                : <Link to="/login" className="signup-btn">Sign Up/In</Link>
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(Menu)
