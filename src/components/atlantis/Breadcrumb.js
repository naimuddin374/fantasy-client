import React from 'react'

class Breadcrumb extends React.Component {
    changeHandler = event => {
        console.log(event.target.value)
    }
    render() {
        return (
            <section className="breadcrum-area atlantis-feature-img relative atlantis-breadcrumb-area">
                <div className="breadcrum-feature-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="breadcrum-wrapper text-center mb-5">
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Recreation with Excitement</h2>
                                <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".6s">Welcoming everyone with a smile</p>
                            </div>
                            <div className="atlantis-search-area">
                                <form action="#">
                                    <div className="atlantis-single-search-content calender-date-checking">
                                        <h4>Pick Your Date</h4>
                                        <div className="check-in-out-date-content">
                                            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                                            <div className="single-date-checking">
                                                <label htmlFor="check_in_date">Check In: </label>
                                                <input type="date" id="check_in_date" name="checkInDate" onChange={this.changeHandler} />
                                            </div>
                                            <div className="single-date-checking">
                                                <label htmlFor="check_out_date">Check Out: </label>
                                                <input type="date" id="check_out_date" name="CheckOutDate" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="atlantis-single-search-content number-guest">
                                        <h4>Number of guest</h4>
                                        <div className="single-atlantis-park-search">
                                            <div className="atlantis-nice-select">
                                                <input type="text" placeholder="2 adults 0 Children" name="adult_children" value="1" onChange={this.changeHandler} />
                                                <ul className="count-guest-list" id="quest_one">

                                                    <li data-value="Fantasy" className="option">
                                                        <div className="select-guest-content">
                                                            <div className="guest-name">
                                                                <span>Adults</span>
                                                            </div>
                                                            <div className="guest-increment-decrement">
                                                                <div className="pro-quantity">
                                                                    <div className="pro-qty atlantis-pro-qty">
                                                                        <button className="dec atlantis_btn">-</button>
                                                                        <input type="number" value="1" name="adult" onChange={this.changeHandler} />
                                                                        <button className="inc  atlantis_btn">+</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li data-value="Fantasy" className="option">
                                                        <div className="select-guest-content">
                                                            <div className="guest-name">
                                                                <span>Children</span>
                                                            </div>
                                                            <div className="guest-increment-decrement">
                                                                <div className="pro-quantity">
                                                                    <div className="pro-qty atlantis-pro-qty">
                                                                        <button className="dec atlantis_btn">-</button>
                                                                        <input type="number" value="1" name="children" onChange={this.changeHandler} />
                                                                        <button className="inc  atlantis_btn">+</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="atlantis-single-search-content number-room">
                                        <h4>Number of room</h4>
                                        <div className="atlantis-page-search-room">
                                            <div className="atlantis-search-room">
                                                <input type="search" name="roomTitle" onChange={this.changeHandler} placeholder="Search Room" />
                                                <button className="atlantis-search-btn">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Breadcrumb
