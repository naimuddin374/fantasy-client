import React from 'react'

class Search extends React.Component {

    render() {
        return (
            <section className="ticket-choosen-area full-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="page-breadcrum-area row-center">
                                <div className="ticket-title">
                                    <h4>Select any park/resorts to view all the offers</h4>
                                </div>
                                <div className="select-park-ticket">
                                    <div className="fantasy-park-search-item float-right">
                                        <form action="#">
                                            <div className="single-fantasy-park-search">
                                                <div className="fantasy-parki-select-item">
                                                    {/* <select id="fantasysearchtype" className="form-control" style="display: none;">
                                                        <option selected="">Select Your Park or resorts</option>
                                                    </select> */}
                                                    <div className="nice-select fantasy-nice-select ticket-search-bg ticket-page-select" tabIndex="0"><span className="current">Select other parks and resorts</span>
                                                        <ul className="list">
                                                            <li data-value="Fantasy" className="option">Fantasy Kingdom</li>
                                                            <li data-value="water" className="option">Water Kingdom</li>
                                                            <li data-value="foys" className="option">Foys Lake</li>
                                                            <li data-value="Heritage" className="option">Heritage Park</li>
                                                        </ul>
                                                    </div>
                                                    <div className="park-select-submit top-select-btn">
                                                        <input type="submit" value="Submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Search
