import React from 'react'

class InnerSearch extends React.Component {
    render() {
        return (
            <div className="select-park-option-area fantasy-select-park-bg">
                <div className="container">
                    <div className="row row-center">
                        <div className="col-lg-3 col-md-3">
                            <img src="./assets/images/headerlogo.png" alt="logo" />
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="fantasy-park-search-item float-right">
                                <form action="#">
                                    <div className="single-fantasy-park-search">
                                        <div className="fantasy-parki-select-item">
                                            {/* <select defaultValue={selectedVal} id="fantasysearchtype" className="form-control" style={{ display: "none" }}>
                                                    <option selected="">Select Other park & resorts</option>
                                                </select> */}
                                            <div className="nice-select fantasy-nice-select" tabIndex="0"><span className="current">Select Other park & resorts</span>
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
        )
    }
}
export default InnerSearch
