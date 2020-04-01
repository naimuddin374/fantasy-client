import React from 'react'
import { Link } from 'react-router-dom'
import HelpLine from './HelpLine'
import ParkHour from './ParkHour'

class Direction extends React.Component {
    state = {
        isModalOpen: false,
        isModalOpenPark: false,
    }
    closeModal = () => this.setState({ isModalOpen: false })
    closeModalPark = () => this.setState({ isModalOpenPark: false })

    render() {
        return (
            <section className="direction-area direction-shape relative section-padding full-bg">
                {/* Tool Tip Body Card */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 offset-lg-2">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 direact-content-col">
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
                                <div className="col-lg-3 col-md-3 direact-content-col">
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
                                <div className="col-lg-3 col-md-3 direact-content-col">
                                    <div className="direction-content">
                                        <HelpLine
                                            isOpen={this.state.isModalOpen}
                                            isClose={this.closeModal}
                                        />
                                        <Link to="#blank" onClick={() => this.setState({ isModalOpen: true })}>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                                                <g id="Group_1" data-name="Group 1" transform="translate(-1015 -420)">
                                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="46" cy="46" r="46" transform="translate(1015 420)" fill="#fff" />
                                                    <g id="telephone" transform="translate(1032.088 438)">
                                                        <path id="Path_2" data-name="Path 2" d="M12.077,36.766A58.678,58.678,0,0,0,31.6,52.055a30.377,30.377,0,0,0,10.922,3.232c.264.011.516.023.779.023A9.045,9.045,0,0,0,50.31,52.3a.25.25,0,0,0,.046-.057,29.529,29.529,0,0,1,2.212-2.292c.539-.516,1.089-1.054,1.616-1.6a5.534,5.534,0,0,0-.023-8.24l-6.888-6.888a5.575,5.575,0,0,0-4.034-1.857,5.763,5.763,0,0,0-4.08,1.845l-4.1,4.1c-.378-.218-.768-.413-1.135-.6a14.174,14.174,0,0,1-1.261-.688,43.423,43.423,0,0,1-10.372-9.444,25.005,25.005,0,0,1-3.507-5.593c1.077-.974,2.086-1.994,3.06-2.991.344-.355.7-.711,1.054-1.066A5.875,5.875,0,0,0,24.8,12.8a5.829,5.829,0,0,0-1.9-4.126L19.481,5.26c-.4-.4-.779-.791-1.169-1.192-.756-.779-1.547-1.582-2.327-2.3A5.713,5.713,0,0,0,11.951,0a5.882,5.882,0,0,0-4.08,1.776L3.585,6.063A8.807,8.807,0,0,0,.961,11.7,21.211,21.211,0,0,0,2.554,20.87,53.34,53.34,0,0,0,12.077,36.766ZM3.757,11.942a6.062,6.062,0,0,1,1.822-3.9L9.843,3.782a3.086,3.086,0,0,1,2.109-.974,2.928,2.928,0,0,1,2.063,1c.768.711,1.49,1.456,2.269,2.246.39.4.791.8,1.192,1.215l3.415,3.415a3.112,3.112,0,0,1,1.077,2.143,3.112,3.112,0,0,1-1.077,2.143c-.355.355-.711.722-1.066,1.077-1.066,1.077-2.063,2.1-3.163,3.071l-.057.057a2.241,2.241,0,0,0-.573,2.544c.011.034.023.057.034.092a26.973,26.973,0,0,0,4.023,6.544A45.83,45.83,0,0,0,31.137,38.416a16.406,16.406,0,0,0,1.513.825,14.17,14.17,0,0,1,1.261.688c.046.023.08.046.126.069a2.4,2.4,0,0,0,1.112.287,2.431,2.431,0,0,0,1.708-.779l4.286-4.286a3.033,3.033,0,0,1,2.1-1.02,2.878,2.878,0,0,1,2.029,1.02l6.911,6.9c1.375,1.375,1.364,2.865-.034,4.321-.481.516-.986,1.009-1.524,1.524a33.005,33.005,0,0,0-2.4,2.487,6.292,6.292,0,0,1-4.917,2.086c-.195,0-.4-.011-.6-.023a27.6,27.6,0,0,1-9.879-2.957A55.743,55.743,0,0,1,14.255,35,51.055,51.055,0,0,1,5.2,19.93,18.485,18.485,0,0,1,3.757,11.942Z" fill="#e81a30" />
                                                    </g>
                                                </g>
                                            </svg>


                                            <h4>Helpline</h4>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 direact-content-col">
                                    <div className="direction-content">
                                        <ParkHour
                                            isOpen={this.state.isModalOpenPark}
                                            isClose={this.closeModalPark}
                                        />
                                        <Link to="#blank" className="clock-direction" onClick={() => this.setState({ isModalOpenPark: true })}>
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 99 99" space="preserve">
                                                <g>
                                                    <circle id="Ellipse_19" className="st0" cx="49.5" cy="49.5" r="49.5" />
                                                    <path id="Union_1" className="st1" d="M48.8,51.7L48.8,51.7z" />
                                                    <g>
                                                        <path className="st2" d="M49,23c-14.3,0-26,11.7-26,26c0,14.3,11.7,26,26,26c14.3,0,26-11.7,26-26C75,34.7,63.3,23,49,23z M49,71
			c-12.1,0-22-9.9-22-22s9.9-22,22-22s22,9.9,22,22S61.1,71,49,71z"/>
                                                        <path className="st2" d="M64.8,49.7h-14v-14c0-1.1-0.9-2-2-2s-2,0.9-2,2v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2S65.9,49.7,64.8,49.7z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>



                                            {/* <svg height="384pt" viewBox="0 0 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0" />
                                                <path d="m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0" />
                                            </svg> */}
                                            <h4>Park Hour</h4>
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
