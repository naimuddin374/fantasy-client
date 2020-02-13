import React from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import { API_URL } from '../../store/actions/types'

class InnerSearch extends React.Component {
    state = {
        className: this.props.className,
        service: {}
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/service${window.location.pathname}`)
            .then(res => {
                this.setState({
                    service: res.data
                })
            })
    }
    render() {
        let { className, service } = this.state
        return (
            <div className={`select-park-option-area ${className}-select-park-bg`}>
                <div className="container">
                    <div className="row row-center">
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            {Object.keys(service).length !== 0 &&
                                service.map(item => (
                                    <img key={item.id} src={API_URL + item.logo} alt="logo" />
                                ))
                            }
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-8">
                            <div className="fantasy-park-search-item float-right">
                                <div className="single-fantasy-park-search">
                                    <div className="fantasy-parki-select-item">
                                        <div className="nice-select fantasy-nice-select" tabIndex="0"><span className="current">Select other parks and resorts</span>
                                            <ul className="list">
                                                <li data-value="Fantasy" className="option"><Link to={`${process.env.PUBLIC_URL}/fantasy-kingdom`}>Fantasy Kingdom</Link></li>
                                                <li data-value="water" className="option"><Link to={`${process.env.PUBLIC_URL}/water-kingdom`}>Water Kingdom</Link></li>
                                                <li data-value="water" className="option"><Link to={`${process.env.PUBLIC_URL}/xtreme-racing`}>Xtreme Racing</Link></li>
                                                <li data-value="water" className="option"><Link to={`${process.env.PUBLIC_URL}/foys-lake`}>Foys Lake</Link></li>
                                                <li data-value="water" className="option"><Link to={`${process.env.PUBLIC_URL}/heritage-park`}>Heritage Park</Link></li>
                                                <li data-value="water" className="option"><Link to={`${process.env.PUBLIC_URL}/atlantis`}>Place To Stay</Link></li>
                                            </ul>
                                        </div>
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
