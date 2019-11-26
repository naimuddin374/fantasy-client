import React from 'react'
import { Link } from 'react-router-dom';

class InnerSearch extends React.Component {
    state = {
        className: this.props.className
    }
    render() {
        let { className } = this.state
        return (
            <div className={`select-park-option-area ${className}-select-park-bg`}>
                <div className="container">
                    <div className="row row-center">
                        <div className="col-lg-3 col-md-3">
                            <img src="./assets/images/headerlogo.png" alt="logo" />
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="fantasy-park-search-item float-right">
                                <div className="single-fantasy-park-search">
                                    <div className="fantasy-parki-select-item">
                                        {/* <select defaultValue={selectedVal} id="fantasysearchtype" className="form-control" style={{ display: "none" }}>
                                                    <option selected="">Select Other park & resorts</option>
                                                </select> */}
                                        <div className="nice-select fantasy-nice-select" tabIndex="0"><span className="current">Select Other park & resorts</span>
                                            <ul className="list">
                                                <li data-value="Fantasy" className="option"><Link to='/fantasy-kingdom'>Fantasy Kingdom</Link></li>
                                                <li data-value="water" className="option"><Link to='/water-kingdom'>Water Kingdom</Link></li>
                                                <li data-value="water" className="option"><Link to='/extreme-kingdom'>Extreme Kingdom</Link></li>
                                                <li data-value="foys" className="option"><Link to='/foys-lake'>Foys Lake</Link></li>
                                                <li data-value="foys" className="option"><Link to='/heritage-park'>Heritage Park</Link></li>

                                                {/* <li data-value="Fantasy" className="option" >Fantasy Kingdom</li>
                                                    <li data-value="water" className="option">Water Kingdom</li>
                                                    <li data-value="foys" className="option">Foys Lake</li>
                                                    <li data-value="Heritage" className="option">Heritage Park</li> */}
                                            </ul>
                                        </div>
                                        {/* <div className="park-select-submit top-select-btn">
                                                <input type="submit" value="Submit" />
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InnerSearch
