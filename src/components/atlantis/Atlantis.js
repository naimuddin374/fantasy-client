import React from 'react'
import RoomSearch from './RoomSearch'
import InnerSearch from './../common/InnerSearch';
import PageContent from './PageContent';
import OurRoom from './OurRoom';
import ContactUs from './ContactUs';
import CircleShape from './../common/CircleShape';
import Axios from 'axios';
import { API_URL } from '../../store/actions/types';
import { setRoom } from '../../store/actions/roomActions'
import { connect } from 'react-redux';
import Loading from './../layout/Loading';

class Atlantis extends React.Component {
    state = {
        rooms: {},
        loading: true,
        isSearchRes: false
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            loading: true
        })
        Axios.get(`${API_URL}api/room`)
            .then(res => {
                this.props.setRoom(res.data)
            })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.rooms) === JSON.stringify(prevState.rooms)) return null
        return {
            rooms: nextProps.rooms,
            loading: false,
        }
    }
    gotToTop() {
        window.scrollTo(0, 0)
    }
    searchHandler = () => {
        this.setState({ isSearchRes: true })
        window.scrollTo(0, 1200)
    }
    render() {
        let { rooms, loading, isSearchRes } = this.state
        return (
            <div>
                <RoomSearch searchHandler={this.searchHandler} />
                <InnerSearch className="atlantis" />
                <PageContent />
                {loading ? <Loading /> :
                    Object.keys(rooms).length === 0 ? <div className="row mb-5">
                        <div className="col-md-6 offset-3">
                            <h1>No room available right now.</h1>
                        </div>
                    </div>
                        : <section className="atlantis-room-suites section-padding-bottom relative">
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
                }

                {loading ? <Loading /> :
                    Object.keys(rooms).length !== 0 &&
                    rooms.map(item => (
                        <OurRoom
                            key={item.id}
                            data={item}
                            history={this.props.history}
                            isSearchRes={isSearchRes}
                            gotToTop={this.gotToTop}
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
