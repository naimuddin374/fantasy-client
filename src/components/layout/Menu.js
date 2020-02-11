import React from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { logout } from '../../store/actions/authActions'
import { DISCOUNT_TAG } from '../../store/actions/types';
import $ from 'jquery';



class Menu extends React.Component {
    state = {
        stickyClass: 'rox-header-menu header-sticky',
    }
    componentDidMount() {
        // sticky header
        var header = $('.header-area'),
            win = $(window);
        win.on('scroll', function () {
            var scroll = win.scrollTop();
            if (scroll < 120) {
                header.removeClass("sticky");
            } else {
                header.addClass("sticky");
            }
        });
        $('.rox-dropdown.nav-item').on('click', function () {
            $('ul.rox-dropdown-menu').slideToggle()
        });

    }
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
            <React.Fragment>
                <nav
                    id="mainMenu" className="navbar header-menu-bg menu-bg  navbar-expand-lg navbar-light header-area">
                    <div className="container">
                        <div className="logo">
                            <Link to='/'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/headerlogo.png`} alt="Site Logo" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                            aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse4" id="navtogglerItemItem">
                            <ul className="navbar-nav m-auto mt-2 mt-lg-0" id="main-menu">

                                <li className="rox-dropdown nav-item" id="full-width">Parks & Tickets  <i className="fa fa-angle-down"></i>
                                    <ul className="rox-dropdown-menu">
                                        <div className="park-list-dropdown">
                                            <div className="menga-menu-park-list">
                                                <li className="megamenu">	<span>Theme Parks</span>
                                                    <div className="megamenu-item">
                                                        <Link to={`${process.env.PUBLIC_URL}/fantasy-kingdom`} className="single-park">
                                                            <span>Fantasy Kingdom</span>
                                                            <p>Open, 10 am- 11 pm</p>
                                                        </Link>
                                                        <Link to={`${process.env.PUBLIC_URL}/foys-lake`} className="single-park">	<span>Foys Lake</span>
                                                            <p>Open, 10 am- 11 pm</p>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="megamenu">	<span>Water Parks</span>
                                                    <div className="megamenu-item">
                                                        <Link to={`${process.env.PUBLIC_URL}/water-kingdom`} className="single-park">	<span>Water Kingdom</span>
                                                            <p>Open, 10 am- 11 pm</p>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="megamenu">	<span>Other parks</span>
                                                    <div className="megamenu-item">
                                                        <Link to={`${process.env.PUBLIC_URL}/xtreme-racing`} className="single-park">	<span>Xtreme Racing</span>
                                                            <p>Open, 10 am- 11 pm</p>
                                                        </Link>
                                                    </div>
                                                    <div className="megamenu-item">
                                                        <Link to={`${process.env.PUBLIC_URL}/heritage-park`} className="single-park">	<span>Heritage Park</span>
                                                            <p>Open, 10 am- 11 pm</p>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </div>
                                            <div className="menu-menu-park-btn mt-5 mb-3">
                                                <Link to={`${process.env.PUBLIC_URL}/news-events`} className="theme-btn">View Events</Link>
                                                <Link to={`${process.env.PUBLIC_URL}/ticket`} className="theme-btn">Buy Tickets</Link>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item"> <Link to={`${process.env.PUBLIC_URL}/things-to-do`} className="nav-link">Things To Do</Link></li>
                                <li className="nav-item"> <Link to={`${process.env.PUBLIC_URL}/atlantis`} className="nav-link">Places to stay</Link></li>
                                <li className="nav-item"> <Link to={`${process.env.PUBLIC_URL}/ticket/${DISCOUNT_TAG}`} className="nav-link">Offers</Link>
                                </li>
                                <li className="nav-item"> <Link className="nav-link" to={`${process.env.PUBLIC_URL}/faq`}>FAQ</Link>
                                </li>

                                <li className="nav-item">
                                    {this.props.auth.isAuth ?
                                        <span className="signup-btn link-btn" onClick={() => this.props.logout(this.props.history)} >Sign Out</span>
                                        : <span>
                                            <Link to={`${process.env.PUBLIC_URL}/register`} className="signup-btn">Create Account</Link>
                                            <span> | </span>
                                            <Link to={`${process.env.PUBLIC_URL}/login`} className="signup-btn">Sign In</Link>
                                        </span>
                                    }
                                </li>

                                {this.props.auth.isAuth &&
                                    <li className="nav-item search-header-btn mobile-none"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/profile`}><i className="fa fa-user"></i></Link>
                                    </li>}

                                <li className="nav-item search-header-btn mobile-none"><Link className="nav-link" to="#search"><i className="fa fa-search"></i></Link>
                                </li>
                                <Cart />
                            </ul>
                        </div>
                        <div className="mobile-menu-card">
                            <Cart />
                        </div>
                        <div className="mobile-menu-search">
                            <li className="nav-item search-header-btn"><Link className="nav-link" to="#search"><i className="fa fa-search"></i></Link>
                            </li>
                        </div>
                        <div className="mobile-menu-profile">
                            {this.props.auth.isAuth &&
                                <li className="nav-item mobile-profile-btn"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/profile`}><i className="fa fa-user"></i></Link>
                                </li>}
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(Menu)
