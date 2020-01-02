import React from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

class Direction extends React.Component {
    render() {
        return (
            <section className="direction-area direction-shape relative section-padding full-bg">
                {/* Tool Tip Body Card */}
                <ReactTooltip />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 direact-content-col">
                                    <div className="direction-content">
                                        <Link to={`${process.env.PUBLIC_URL}/maps`}>
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
                                    <div className="direction-content">
                                        <Link to="#blank">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                                                <g id="Group_1" data-name="Group 1" transform="translate(-1015 -420)">
                                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="46" cy="46" r="46" transform="translate(1015 420)" fill="#fff" />
                                                    <g id="telephone" transform="translate(1032.088 438)">
                                                        <path id="Path_2" data-name="Path 2" d="M12.077,36.766A58.678,58.678,0,0,0,31.6,52.055a30.377,30.377,0,0,0,10.922,3.232c.264.011.516.023.779.023A9.045,9.045,0,0,0,50.31,52.3a.25.25,0,0,0,.046-.057,29.529,29.529,0,0,1,2.212-2.292c.539-.516,1.089-1.054,1.616-1.6a5.534,5.534,0,0,0-.023-8.24l-6.888-6.888a5.575,5.575,0,0,0-4.034-1.857,5.763,5.763,0,0,0-4.08,1.845l-4.1,4.1c-.378-.218-.768-.413-1.135-.6a14.174,14.174,0,0,1-1.261-.688,43.423,43.423,0,0,1-10.372-9.444,25.005,25.005,0,0,1-3.507-5.593c1.077-.974,2.086-1.994,3.06-2.991.344-.355.7-.711,1.054-1.066A5.875,5.875,0,0,0,24.8,12.8a5.829,5.829,0,0,0-1.9-4.126L19.481,5.26c-.4-.4-.779-.791-1.169-1.192-.756-.779-1.547-1.582-2.327-2.3A5.713,5.713,0,0,0,11.951,0a5.882,5.882,0,0,0-4.08,1.776L3.585,6.063A8.807,8.807,0,0,0,.961,11.7,21.211,21.211,0,0,0,2.554,20.87,53.34,53.34,0,0,0,12.077,36.766ZM3.757,11.942a6.062,6.062,0,0,1,1.822-3.9L9.843,3.782a3.086,3.086,0,0,1,2.109-.974,2.928,2.928,0,0,1,2.063,1c.768.711,1.49,1.456,2.269,2.246.39.4.791.8,1.192,1.215l3.415,3.415a3.112,3.112,0,0,1,1.077,2.143,3.112,3.112,0,0,1-1.077,2.143c-.355.355-.711.722-1.066,1.077-1.066,1.077-2.063,2.1-3.163,3.071l-.057.057a2.241,2.241,0,0,0-.573,2.544c.011.034.023.057.034.092a26.973,26.973,0,0,0,4.023,6.544A45.83,45.83,0,0,0,31.137,38.416a16.406,16.406,0,0,0,1.513.825,14.17,14.17,0,0,1,1.261.688c.046.023.08.046.126.069a2.4,2.4,0,0,0,1.112.287,2.431,2.431,0,0,0,1.708-.779l4.286-4.286a3.033,3.033,0,0,1,2.1-1.02,2.878,2.878,0,0,1,2.029,1.02l6.911,6.9c1.375,1.375,1.364,2.865-.034,4.321-.481.516-.986,1.009-1.524,1.524a33.005,33.005,0,0,0-2.4,2.487,6.292,6.292,0,0,1-4.917,2.086c-.195,0-.4-.011-.6-.023a27.6,27.6,0,0,1-9.879-2.957A55.743,55.743,0,0,1,14.255,35,51.055,51.055,0,0,1,5.2,19.93,18.485,18.485,0,0,1,3.757,11.942Z" fill="#e81a30" />
                                                    </g>
                                                </g>
                                            </svg>


                                            <h4 data-tip="880-2-7790816-19, 01913-531474, info@concord.com.bd">Helpline</h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 direact-content-col">
                                    <div className="direction-content">
                                        <Link to="#blank" className="clock-direction">
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
                                            <h4 data-tip="Open from 11:00 AM to 7:30 PM">Parking</h4>
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
