import React from 'react'
import Breadcrumb from './Breadcrumb'
import InnerSearch from './../common/InnerSearch';
import PageContent from './PageContent';
import OurRoom from './OurRoom';
import ContactUs from './ContactUs';
import CircleShape from './../common/CircleShape';
import Axios from 'axios';
import { API_URL } from '../../store/actions/types';
import { setRoom } from '../../store/actions/roomActions'
import { connect } from 'react-redux';


class Atlantis extends React.Component {
    state = {
        rooms: {}
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        Axios.get(`${API_URL}api/room`)
            .then(res => {
                this.props.setRoom(res.data)
            })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.rooms) === JSON.stringify(prevState.rooms)) return null
        return {
            rooms: nextProps.rooms,
        }
    }
    render() {
        let { rooms } = this.state
        return (
            <div>
                <Breadcrumb />
                <InnerSearch className="atlantis" />
                <PageContent />

                <section className="atlantis-room-suites section-padding-bottom relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="section-title atlantis-section-title mb-40">
                                    <h2>Our Rooms & Suites</h2>
                                </div>
                            </div>
                        </div>
                        <CircleShape />
                    </div>
                </section>

                {Object.keys(rooms).length !== 0 &&
                    rooms.map(item => (
                        <OurRoom
                            key={item.id}
                            data={item}
                        />
                    ))
                }
                <ContactUs />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    rooms: state.cart.rooms,
})
export default connect(mapStateToProps, { setRoom })(Atlantis)
