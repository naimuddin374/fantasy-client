import React from 'react'
import Axios from 'axios'
import CircleShape from './CircleShape'
import Item from './Item'

class ThingsToDo extends React.Component {
    state = {
        thingsToDo: {}
    }
    componentDidMount() {
        Axios.get(`api/things-to-do`)
            .then(res => {
                this.setState({
                    thingsToDo: res.data
                })
            })
            .catch(err => console.log(err.response))
    }
    render() {
        let { thingsToDo } = this.state
        return (
            <div>
                <section className="ticket-choosen-area full-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="page-breadcrum-area row-center">
                                    <div className="ticket-title">
                                        <h4>Select Any park/resorts to view all the activities</h4>
                                    </div>
                                    <div className="select-park-ticket">
                                        <div className="fantasy-park-search-item float-right">
                                            <form action="#">
                                                <div className="single-fantasy-park-search">
                                                    <div className="fantasy-parki-select-item">
                                                        {/* <select id="fantasysearchtype" className="form-control" style="display: none;">
                                                        <option selected="">Select Your Park or resorts</option>
                                                    </select> */}
                                                        <div className="nice-select fantasy-nice-select ticket-search-bg ticket-page-select" tabIndex="0"><span className="current">Select Your Park or resorts</span>
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

                <section className="things-to-do-page-content-area section-padding relative">
                    <CircleShape />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title fantasy-section-title mb-40">
                                    <h2>Things To Do</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row advanture-ride-area pb-3">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="thing-to-title text-center pb-40 pt-3">
                                    <h4 className="advanture-ride-title">Adventure Rides</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Object.keys(thingsToDo).length !== 0 &&
                                thingsToDo.map(item => (
                                    item.category === "1" &&
                                    <Item item={item} key={item.id} />
                                ))
                            }
                        </div>
                        <div className="row live-entertainment">
                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                                <div className="thing-to-title text-center pb-40 pt-3">
                                    <h4 className="event-entertainment-title">Events & Live Entertainment</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Object.keys(thingsToDo).length !== 0 &&
                                thingsToDo.map(item => (
                                    item.category === "2" &&
                                    <Item item={item} key={item.id} />
                                ))
                            }
                        </div>
                        <div className="row live-entertainment">
                            <div className="col-lg-12 offset-lg-2 col-md-12 offset-md-2">
                                <div className="thing-to-title text-center pb-40 pt-3">
                                    <h4 className="dining-shopping-title">Dining & Shopping</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Object.keys(thingsToDo).length !== 0 &&
                                thingsToDo.map(item => (
                                    item.category === "3" &&
                                    <Item item={item} key={item.id} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}
export default ThingsToDo
