import React from 'react'

class Shopping extends React.Component {
    state = {
        className: this.props.className
    }
    render() {
        let { className } = this.state
        return (
            <section className="fantasy-hotel-room-area section-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="dining-table-content fantasy-hotel-table-content">
                                <div className={`fantasy-hotel-table-title section-title-small-text ${className}-section-title-small-text`}>
                                    <h2>Dining</h2>
                                </div>
                                {/* <div className="fantasy-hotel-icon">
                                    <Link to={`${process.env.PUBLIC_URL}/`} className="hotel-icon relative"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                                </div> */}
                            </div>
                            <div className="dining-feature hotel-feature-img mt-3">
                                <a href="#blank">
                                    <img src="./assets/images/hotelfeature/dinner.png" alt="dining" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="shopping-table-content fantasy-hotel-table-content">
                                <div className={`fantasy-hotel-table-title section-title-small-text ${className}-section-title-small-text`}>
                                    <h2>Shopping</h2>
                                </div>
                                {/* <div className="fantasy-hotel-icon">
                                    <Link to={`${process.env.PUBLIC_URL}/`} className="hotel-icon relative"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                                </div> */}
                            </div>
                            <div className="dining-feature hotel-feature-img mt-3">
                                <a href="#blank">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/hotelfeature/shopping.png`} alt="shopping" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Shopping
