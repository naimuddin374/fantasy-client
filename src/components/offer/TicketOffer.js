import React from 'react'
import Axios from 'axios'
import CircleShape from './CircleShape'
import Item from './Item'
import { API_URL } from '../../store/actions/types'
import Loading from '../layout/Loading';
import $ from 'jquery';


class TicketOffer extends React.Component {
    state = {
        rides: {},
        loading: true
    }
    componentDidMount() {
        if (window.innerWidth < 980) {
            $("#main-menu").hide('slow');
        }

        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/ride-offer`)
            .then(res => {
                this.setState({
                    rides: res.data,
                    loading: false
                })
            })
    }
    render() {
        let { rides, loading } = this.state
        return (
            <div>
                {/* <InnerSearch className="fantasy" /> */}
                <section className="things-to-do-page-content-area section-padding relative">
                    <CircleShape />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title fantasy-section-title mb-30">
                                    <h2>Offers</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            {loading ? <Loading /> : <div className="row">
                                {Object.keys(rides).length !== 0 ?
                                    rides.map(item =>
                                        <Item data={item} key={item.id} />
                                    ) : <h3>No Offer Found!</h3>
                                }
                            </div>}

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default TicketOffer
