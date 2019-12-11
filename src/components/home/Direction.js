import React from 'react'
import { Link } from 'react-router-dom'
import ParkingHour from './ParkingHour'
import MapImage from './MapImage'

class Direction extends React.Component {
    state = {
        isModalOpen: false,
        isModalOpenMap: false,
    }
    openModal = () => {
        this.setState({
            isModalOpen: true,
            isModalOpenMap: false,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }
    openModalMap = () => {
        this.setState({
            isModalOpen: false,
            isModalOpenMap: true,
        })
    }
    closeModalMap = () => {
        this.setState({
            isModalOpenMap: false,
        })
    }
    render() {
        return (
            <section className="direction-area direction-shape relative section-padding full-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 direact-content-col">
                                    <div className="direction-content" onClick={this.openModalMap}>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99">
                                                <g id="Group_1292" data-name="Group 1292" transform="translate(-560 -2216)">
                                                    <g id="Group_1290" data-name="Group 1290">
                                                        <circle id="Ellipse_16" data-name="Ellipse 16" cx="49.5" cy="49.5" r="49.5" transform="translate(560 2216)" fill="#f9f9f9" />
                                                    </g>
                                                    <path id="Path_2175" data-name="Path 2175" d="M52.62,30.816a24.023,24.023,0,0,1-1.842,7.632C48.594,43.7,45.011,47.921,41.6,52.386c-.876,1.146-10.625,12.585-11.086,12.147A132.016,132.016,0,0,1,20.161,53.4C15.186,47.444,8.7,39.745,8.082,31.647,7.127,19.118,18.325,8.375,30.517,8.375a23.545,23.545,0,0,1,17.92,9.008A19.04,19.04,0,0,1,52.62,30.816Z" transform="translate(578.975 2228.625)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                    <circle id="Ellipse_11" data-name="Ellipse 11" cx="9.794" cy="9.794" r="9.794" transform="translate(599.53 2249.552)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                </g>
                                            </svg>
                                            <h4>Maps</h4>
                                        </Link>
                                    </div>
                                    {/* Map image view modal*/}
                                    <MapImage
                                        isOpen={this.state.isModalOpenMap}
                                        isClose={this.closeModalMap}
                                    />

                                </div>
                                <div className="col-lg-3 col-md-6 direact-content-col">
                                    <div className="direction-content">
                                        <a href="https://g.page/fantasy-kingdom-dhaka?share" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99">
                                                <g id="Group_1293" data-name="Group 1293" transform="translate(-782 -2216)">
                                                    <circle id="Ellipse_17" data-name="Ellipse 17" cx="49.5" cy="49.5" r="49.5" transform="translate(782 2216)" fill="#f9f9f9" />
                                                    <path id="Path_2176" data-name="Path 2176" d="M.235,46.31,13.562,3.884c1.624-5.178,9.823-5.178,11.453,0L38.343,46.31c1.446,4.6-4.076,8.444-8.7,6.057l-7.384-3.814a6.565,6.565,0,0,0-5.944,0L8.933,52.367C4.31,54.754-1.211,50.908.235,46.31Z" transform="translate(801.5 2251.789) rotate(-30)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                </g>
                                            </svg>
                                            <h4>Direction</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 direact-content-col">
                                    <div className="direction-content" onClick={this.openModal}>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99">
                                                <g id="Group_1293" data-name="Group 1293" transform="translate(-1012 -2216)">
                                                    <circle id="Ellipse_18" data-name="Ellipse 18" cx="49.5" cy="49.5" r="49.5" transform="translate(1012 2216)" fill="#f9f9f9" />
                                                    <g id="Group_1157" data-name="Group 1157" transform="translate(1025 2239)">
                                                        <path id="Path_2177" data-name="Path 2177" d="M63.663,29.9,57.636,10.058H13.219L7.192,29.9V49.74H63.663Z" transform="translate(0.875 -10.058)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <line id="Line_48" data-name="Line 48" x2="56.471" transform="translate(8.067 19.841)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <path id="Rectangle_276" data-name="Rectangle 276" d="M0,0H10.005a0,0,0,0,1,0,0V10.549a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z" transform="translate(15.019 39.682)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <path id="Rectangle_277" data-name="Rectangle 277" d="M0,0H10.005a0,0,0,0,1,0,0V10.549a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z" transform="translate(46.392 39.682)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <line id="Line_49" data-name="Line 49" x2="8.818" transform="translate(16.207 29.338)" fill="none" stroke="#e50019" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                                                        <line id="Line_50" data-name="Line 50" x2="8.818" transform="translate(45.544 29.762)" fill="none" stroke="#e50019" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                                                        <rect id="Rectangle_278" data-name="Rectangle 278" width="9.949" height="6.834" rx="2" transform="translate(62.655 14.89)" fill="#e50019" />
                                                        <rect id="Rectangle_279" data-name="Rectangle 279" width="9.949" height="6.834" rx="2" transform="translate(0 14.89)" fill="#e50019" />
                                                    </g>
                                                </g>
                                            </svg>
                                            <h4>Parking Hour</h4>
                                        </Link>
                                    </div>
                                    {/* Opening and closing time view modal*/}
                                    <ParkingHour
                                        isOpen={this.state.isModalOpen}
                                        isClose={this.closeModal}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 direact-content-col">
                                    <div className="direction-content">
                                        <Link to={`${process.env.PUBLIC_URL}/`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99">
                                                <g id="Group_1293" data-name="Group 1293" transform="translate(-1012 -2216)">
                                                    <circle id="Ellipse_18" data-name="Ellipse 18" cx="49.5" cy="49.5" r="49.5" transform="translate(1012 2216)" fill="#f9f9f9" />
                                                    <g id="Group_1157" data-name="Group 1157" transform="translate(1025 2239)">
                                                        <path id="Path_2177" data-name="Path 2177" d="M63.663,29.9,57.636,10.058H13.219L7.192,29.9V49.74H63.663Z" transform="translate(0.875 -10.058)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <line id="Line_48" data-name="Line 48" x2="56.471" transform="translate(8.067 19.841)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <path id="Rectangle_276" data-name="Rectangle 276" d="M0,0H10.005a0,0,0,0,1,0,0V10.549a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z" transform="translate(15.019 39.682)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <path id="Rectangle_277" data-name="Rectangle 277" d="M0,0H10.005a0,0,0,0,1,0,0V10.549a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z" transform="translate(46.392 39.682)" fill="none" stroke="#e50019" strokeMiterlimit="10" strokeWidth="4" />
                                                        <line id="Line_49" data-name="Line 49" x2="8.818" transform="translate(16.207 29.338)" fill="none" stroke="#e50019" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                                                        <line id="Line_50" data-name="Line 50" x2="8.818" transform="translate(45.544 29.762)" fill="none" stroke="#e50019" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                                                        <rect id="Rectangle_278" data-name="Rectangle 278" width="9.949" height="6.834" rx="2" transform="translate(62.655 14.89)" fill="#e50019" />
                                                        <rect id="Rectangle_279" data-name="Rectangle 279" width="9.949" height="6.834" rx="2" transform="translate(0 14.89)" fill="#e50019" />
                                                    </g>
                                                </g>
                                            </svg>
                                            <h4>Parking</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default Direction
