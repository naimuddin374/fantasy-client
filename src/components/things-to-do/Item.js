import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../store/actions/types'
import { textLimit } from '../../util/helper'

class Item extends React.Component {
    state = {
        item: {}
    }
    componentDidMount(){
        this.setState({
            item: this.props.item
        })
    }
    render() {
        let { id, title, image, description } = this.state.item
        return (
            <div className="col-lg-4 col-md-6" key={id}>
                <div className="single-thing-to-do-content single-advanture-ride popular-item-border">
                    <Link to="/ticket">
                        <img src={image &&API_URL + image} alt="advanture img" />
                    </Link>
                    <div className="popular-item"> <span className="thing-popular">popular</span>
                    </div>
                    <div className="thing-to-do-inner-content">
                        <div className="t-top-content">
                            <div className="t-title-content">
                                <Link to="/ticket" className="t-tile">{title}</Link>
                            </div>
                        </div>
                        <p>{textLimit(description, 100)}</p>
                        <div className="t-bottom-content">
                            {/* <div className="t-viewdetails-content"> <Link to="/" className="view-gallery">View Gallery</Link>
                                                    </div> */}
                            <div className="t-ticket-btn-content"> <Link to="/ticket" className="payment-btn">Buy Ticket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item
