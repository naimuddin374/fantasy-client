import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    state = {
        stickyClass: 'rox-header-menu header-sticky'
    }
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
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
            <div>
                <div className={this.state.stickyClass} id="header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-12">
                                <div className="rox-logo">
                                    <Link to='/'>
                                        <img src='./assets/images/headerlogo.png' alt="Site Logo" />
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
                                                                    <Link to="fantasy-kingdom" className="single-park">
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
                                                                    <Link to="/extreme-kingdom" className="single-park">	<span>Extreme Racing Add</span>
                                                                        <p>Open, 10 am- 11 pm</p>
                                                                    </Link>
                                                                </div>
                                                                <div className="megamenu-item">
                                                                    <Link to="#" className="single-park">	<span>Heritage Park</span>
                                                                        <p>Open, 10 am- 11 pm</p>
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <div className="menu-menu-park-btn mt-5 mb-3">	<Link to="#" className="theme-btn">View Events</Link>
                                                            <Link to="/ticket" className="theme-btn">Buy Tickets</Link>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            <li className="nav-item"> <Link to="/things-to-do" className="nav-link">Things To Do</Link></li>
                                            <li className="nav-item"> <Link to="placestay.html" className="nav-link">Places to stay</Link></li>
                                            <li className="nav-item"> <Link to="merchandise.html" className="nav-link">Merchandise</Link>
                                            </li>
                                            <li className="nav-item"> <Link to="#" className="nav-link">Offers</Link>
                                            </li>
                                            <li className="nav-item"> <Link className="nav-link" to="/faq">FAQ</Link>
                                            </li>
                                            <li className="nav-item search-header-btn"><Link className="nav-link" to="#search"><i className="fa fa-search"></i></Link>
                                            </li>
                                            <li className="nav-item cart-item-header"><Link className="nav-link shopping-cart-btn" to="#cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="cart-count">2</span></Link>
                                                <div className="fantasy-mini-cart">
                                                    <div className="fantasy-mini-cart-inner">
                                                        <div className="fantasy-cart-item">
                                                            <div className="fantasy-cart-img">
                                                                <Link to="#">
                                                                    <img src="./assets/images/cart/product1.jpg" alt="product" />
                                                                </Link>
                                                            </div>
                                                            <div className="fantasy-cart-info">	<Link to="#">Promotional Ticket</Link>
                                                                <p>Qty: 2<span>BDT 30.00 </span>
                                                                </p>
                                                            </div>
                                                            <div className="fantasy-cart-remove">	<Link to="#"><i className="fa fa-close"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="fantasy-cart-item">
                                                            <div className="fantasy-cart-img">
                                                                <Link to="#">
                                                                    <img src="./assets/images/cart/product3.jpg" alt="product" />
                                                                </Link>
                                                            </div>
                                                            <div className="fantasy-cart-info">	<Link to="#">2-Day Ticket</Link>
                                                                <p>Qty: 4 <span>BDT 120.00 </span>
                                                                </p>
                                                            </div>
                                                            <div className="fantasy-cart-remove">
                                                                <Link to="#"><i className="fa fa-close"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="fantasy-mini-cart-table">
                                                            <div className="fantasy-cart-total mt-10">	<span className="fantasy-total-amount">Sub-Total:</span>
                                                                <span className="fantasy-price">BDT 120.00</span>
                                                            </div>
                                                            <div className="fantasy-cart-total mt-10">	<span className="fantasy-total-amount">Total:</span>
                                                                <span className="fantasy-price">BDT 150.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fantasy-mini-cart-footer">
                                                        <div className="fantasy-cart-button">
                                                            <Link to="#" className="theme-btn">View cart</Link>
                                                        </div>
                                                        <div className="fantasy-cart-button">
                                                            <Link to="/checkout" className="theme-btn">Checkout</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item"> <Link to="#modalJoin" className="signup-btn" data-toggle="modal">Sign Up/In</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu
