import React from 'react'
import { Link } from 'react-router-dom'

class Tickets extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <section className="ticket-choosen-area full-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="page-breadcrum-area row-center">
                                    <div className="ticket-title">
                                        <h4>Select Any park/resorts to view all the offers</h4>
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

                <section className="checkout-page-area section-padding">
                    <div className="circle-shape">
                        <svg id="Group_1471" data-name="Group 1471" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 780">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_378" data-name="Rectangle 378" width="1920" height="780" fill="none" />
                                </clipPath>
                            </defs>
                            <g id="Group_1470" data-name="Group 1470" clipPath="url(#clip-path)">
                                <g id="blob-shape" opacity="0.15">
                                    <path id="Path_2001" data-name="Path 2001" d="M1263.887,575.856c174.159,68.635,470.625,38.48,574.517,10.061,108.9,16.731,111.409,236.9,145.474,489.45s30.812,641.653-220.086,907.344-747.983,408.534-1058.549,309.245c-311.751-98.745-437.071-439.574-818.971-776.93s-1018.855-671.17-907.731-931.905c111.737-262.1,971.952-450.206,1502.744-422.658C1010.417,187.9,1089.679,507.134,1263.887,575.856Z" fill="#d2d2d2" />
                                </g>
                                <g id="Group_1031" data-name="Group 1031" opacity="0.15">
                                    <g id="Group_1015" data-name="Group 1015">
                                        <path id="Path_2002" data-name="Path 2002" d="M-156.425,121.849a11.46,11.46,0,0,0,3.212-4.911,10.9,10.9,0,0,0-6.809-13.8,10.9,10.9,0,0,0-13.8,6.81c.007.141-.059.216-.119.431a11.11,11.11,0,0,0-.269,5.677,33.192,33.192,0,0,1-9.917-10.95,2.73,2.73,0,0,0-.876-1.865,2.443,2.443,0,0,0-3.4-.1,2.442,2.442,0,0,0-.1,3.4l.223.2a2.849,2.849,0,0,0,1.233.573c4.307,7.916,17,17.73,17,17.73l-4.309,15.091,25.067-1.239-5.926-11.8a19.059,19.059,0,0,1,11.076,10.111c.491-.1,1.056-.126,1.546-.222a21.685,21.685,0,0,0-5.02-10.711A13.31,13.31,0,0,0-156.425,121.849Z" fill="#d2d2d2" />
                                        <path id="Path_2003" data-name="Path 2003" d="M-101.771,112.409l-.379-.476.6-.669a2.606,2.606,0,0,0-.466-3.515,2.465,2.465,0,0,0-2.81.43l-.148-.134s-10.481,6.707-13.684,6.379a11.167,11.167,0,0,0,2.537-5.655c.968-5.855-2.293-11.348-7.294-12.219s-9.959,3.139-10.994,9.069a11.565,11.565,0,0,0,.933,7.031c-6.585,2.68-17.66,8.852-16.46,19.62l.565-.029a2.013,2.013,0,0,0-.068,1.419,3.424,3.424,0,0,0,2.013,1.948,3.138,3.138,0,0,0,2.765.068,2.668,2.668,0,0,0,.922-2.668A2.167,2.167,0,0,0-144,132.1l.564-.029s-.009-15.079,11.769-14.561c0,0-6.033,17.3-4.219,16.786s26.85-.979,26.85-.979l-5.889-11.09C-114.794,121.938-105.266,120.024-101.771,112.409Z" fill="#d2d2d2" />
                                        <g id="Group_1014" data-name="Group 1014">
                                            <path id="Path_2004" data-name="Path 2004" d="M-207.1,138.661l20.638,39.981,78.9-8.726,16.825-41.089Z" fill="#d2d2d2" />
                                            <path id="Path_2005" data-name="Path 2005" d="M-155.92,185.965a11.055,11.055,0,0,1-14.479,6.067,11.054,11.054,0,0,1-6.066-14.479,11.054,11.054,0,0,1,14.479-6.066h0A11.178,11.178,0,0,1-155.92,185.965Z" fill="#d2d2d2" />
                                            <path id="Path_2006" data-name="Path 2006" d="M-109.293,180.06a11.054,11.054,0,0,1-14.479,6.066,11.054,11.054,0,0,1-6.066-14.479,11.054,11.054,0,0,1,14.479-6.066A11.179,11.179,0,0,1-109.293,180.06Z" fill="#d2d2d2" />
                                        </g>
                                    </g>
                                    <g id="Group_1017" data-name="Group 1017">
                                        <path id="Path_2007" data-name="Path 2007" d="M77.844,93.873l-.326-.483a2.959,2.959,0,0,0,.562-.731,2.612,2.612,0,0,0-.454-3.521,2.789,2.789,0,0,0-2.809.344l-.138-.175S64.17,95.989,60.987,95.718a11.863,11.863,0,0,0,2.53-5.66c.959-5.841-2.231-11.3-7.31-12.236-5.032-.8-9.978,3.179-10.937,9.02a12.36,12.36,0,0,0,.907,7.042c-6.59,2.773-17.738,8.936-16.462,19.681l.58-.061a1.61,1.61,0,0,0-.006,1.432,3.222,3.222,0,0,0,1.975,1.914,2.95,2.95,0,0,0,2.73.06,2.816,2.816,0,0,0,.912-2.664,4.314,4.314,0,0,0-.248-.888l.58-.06S36.23,98.18,47.917,98.667c0,0-6.013,17.384-4.195,16.8s26.9-1.134,26.9-1.134l-5.982-11.064C64.775,103.442,74.342,101.617,77.844,93.873Z" fill="#d2d2d2" />
                                        <path id="Path_2008" data-name="Path 2008" d="M108.336,106.552a11.476,11.476,0,0,0,2.814-5.086,10.883,10.883,0,0,0-21.08-5.421l-.085.182a10.812,10.812,0,0,0,.2,5.719A33.389,33.389,0,0,1,79.529,91.68a2.2,2.2,0,0,0-.942-1.763,2.566,2.566,0,0,0-3.479.363h0a2.475,2.475,0,0,0,.5,3.43,2.246,2.246,0,0,0,1.31.5c4.815,7.652,18.117,16.505,18.117,16.505l-3.3,15.342,24.879-2.958-6.707-11.4a19.033,19.033,0,0,1,11.792,9.251l1.467-.308a22.46,22.46,0,0,0-5.691-10.267A14.093,14.093,0,0,0,108.336,106.552Z" fill="#d2d2d2" />
                                        <g id="Group_1016" data-name="Group 1016">
                                            <path id="Path_2009" data-name="Path 2009" d="M20.443,115.94l19.486,40.531,79.122-6.669L137,109.193Z" fill="#d2d2d2" />
                                            <path id="Path_2010" data-name="Path 2010" d="M70.341,164.59a11.1,11.1,0,1,1-5.632-14.652h0A11.2,11.2,0,0,1,70.341,164.59Z" fill="#d2d2d2" />
                                            <path id="Path_2011" data-name="Path 2011" d="M117.09,159.92a11.1,11.1,0,1,1-5.632-14.652A11.271,11.271,0,0,1,117.09,159.92Z" fill="#d2d2d2" />
                                        </g>
                                    </g>
                                    <g id="Group_1019" data-name="Group 1019">
                                        <path id="Path_2012" data-name="Path 2012" d="M172.813,99.686a3.082,3.082,0,0,1,.331-1.871,2.894,2.894,0,0,1,1.685-.921c5.77-1.621,11.522-3.143,17.291-4.764a12.019,12.019,0,0,0,3.713-1.477c.829-.666,6.39-4.557,5.376-5.142s-11.023,2.622-11.764,2.8c-2.85.613-5.6,1.244-8.452,1.858-3.064.677-6.227,1.337-9.372,1.9a11.522,11.522,0,0,0,.748-2.508c1.061-6.007-2.223-11.562-7.442-12.484-5.12-.9-10.206,3.173-11.267,9.18a12.085,12.085,0,0,0,.26,5.427,24.291,24.291,0,0,1-4.489-1.605,20.83,20.83,0,0,1-10.986-11.384c-.863-.863-2.514-.139-2.821,1.025a5.426,5.426,0,0,0,.59,3.556c2.09,4.837,4.36,9.807,8.7,12.809,2.073,1.483,4.448,2.41,6.156,4.235,2.132,2.306,2.676,5.549,3.139,8.677l-.858,1.981,21.722-2.255A25.178,25.178,0,0,1,172.813,99.686Z" fill="#d2d2d2" />
                                        <path id="Path_2013" data-name="Path 2013" d="M231.948,90.838l-.307-.561c.232-.163.481-.423.713-.585a2.264,2.264,0,0,0-2.71-3.627l-.064-.214s-11.5,4.771-14.522,4.035a11.772,11.772,0,0,0,3.453-5.178c2.011-5.635-.3-11.527-5.165-13.3s-10.3,1.429-12.315,7.065a11.289,11.289,0,0,0-.233,7.067c-6.968,1.51-18.994,5.783-19.575,16.545l.591.105a1.948,1.948,0,0,0-.261,1.477,3.9,3.9,0,0,0,1.622,2.317,2.615,2.615,0,0,0,2.658.469,2.527,2.527,0,0,0,1.356-2.5c-.046-.312.006-.608-.041-.921l.591.105s2.528-14.886,13.979-12.457c0,0-8.934,16.089-6.959,15.829,1.877-.278,26.7,3.5,26.7,3.5l-3.977-11.973S227.163,97.812,231.948,90.838Z" fill="#d2d2d2" />
                                        <rect id="Rectangle_224" data-name="Rectangle 224" width="24.499" height="4.6" transform="translate(228.163 107.763) rotate(-83.652)" fill="#d2d2d2" />
                                        <g id="Group_1018" data-name="Group 1018">
                                            <path id="Path_2014" data-name="Path 2014" d="M127.693,109.091l19.335,40.578,79.182-6.22,18.113-40.463Z" fill="#d2d2d2" />
                                            <path id="Path_2015" data-name="Path 2015" d="M177.326,158.067a11.132,11.132,0,1,1-5.628-14.7,11.242,11.242,0,0,1,5.628,14.7Z" fill="#d2d2d2" />
                                            <path id="Path_2016" data-name="Path 2016" d="M224.106,153.637a11.132,11.132,0,1,1-5.628-14.7A11.242,11.242,0,0,1,224.106,153.637Z" fill="#d2d2d2" />
                                        </g>
                                    </g>
                                    <g id="Group_1021" data-name="Group 1021">
                                        <path id="Path_2017" data-name="Path 2017" d="M-42.279,127.74c-2.372-3.69-3.68-4.063-6.548-7.358-.444-.05-2.2-3.219-2.645-3.27a12.971,12.971,0,0,0,2.494-4.938c1.4-6.008-1.58-11.881-6.753-13.1s-10.51,2.591-11.91,8.6a14.594,14.594,0,0,0-.352,3.11A48.285,48.285,0,0,1-83.63,97.044a6.282,6.282,0,0,0-2.44-2.3A2.831,2.831,0,0,0-89.52,96.2a2.8,2.8,0,0,0,1.039,3.538,12.864,12.864,0,0,0,1.811.7,6.259,6.259,0,0,1,2.3,1.97l5.533,5.982c3.652,3.924,7.416,8.041,8.754,13.323.524,2.13.746,4.54,2.373,6.075a8.881,8.881,0,0,0,4.263,1.7,72.384,72.384,0,0,0,19.427.939c.914-.121,2.159-.385,2.259-1.274A2.716,2.716,0,0,0-42.279,127.74Z" fill="#d2d2d2" />
                                        <path id="Path_2018" data-name="Path 2018" d="M-10.791,113.976a2.788,2.788,0,0,1,.478-1.836,3.362,3.362,0,0,1,1.71-.8c5.811-1.233,11.7-2.411,17.57-3.727a6.6,6.6,0,0,0,3.148-1.174,3.752,3.752,0,0,0,1.522-2.708,3.105,3.105,0,0,0-1.283-2.981,2.292,2.292,0,0,0-3.073.507c-.327.5-.4,1.17-.813,1.618a2.937,2.937,0,0,1-2.071.8l-8.527,1.375c-3.157.453-6.368.99-9.554,1.3a10.163,10.163,0,0,0,.859-2.423c1.43-5.869-1.551-11.742-6.64-12.9-5.035-1.246-10.372,2.561-11.8,8.43a12.385,12.385,0,0,0-.076,5.437,35.6,35.6,0,0,1-4.431-1.806A20.9,20.9,0,0,1-44.119,91.121c-.788-.989-2.444-.277-2.847.893a5.262,5.262,0,0,0,.4,3.6c1.777,4.972,3.806,10.107,7.894,13.36,1.932,1.614,4.33,2.7,5.907,4.675,1.97,2.473,2.314,5.8,2.6,8.845l-1.031,1.954c7.235-.306,14.471-.612,21.761-1A36.2,36.2,0,0,1-10.791,113.976Z" fill="#d2d2d2" />
                                        <rect id="Rectangle_225" data-name="Rectangle 225" width="24.499" height="4.6" transform="translate(6.878 122.674) rotate(-80.088)" fill="#d2d2d2" />
                                        <g id="Group_1020" data-name="Group 1020">
                                            <path id="Path_2019" data-name="Path 2019" d="M-92.957,130.149l21.733,39.41,78.7-10.984,15.632-41.481Z" fill="#d2d2d2" />
                                            <path id="Path_2020" data-name="Path 2020" d="M-40.5,176.053a11.092,11.092,0,0,1-14.321,6.435,11.091,11.091,0,0,1-6.435-14.32,11.092,11.092,0,0,1,14.321-6.436A11.191,11.191,0,0,1-40.5,176.053Z" fill="#d2d2d2" />
                                            <path id="Path_2021" data-name="Path 2021" d="M5.958,168.8a11.091,11.091,0,0,1-14.32,6.435,11.091,11.091,0,0,1-6.435-14.32A11.091,11.091,0,0,1-.477,154.48,11.189,11.189,0,0,1,5.958,168.8Z" fill="#d2d2d2" />
                                        </g>
                                    </g>
                                </g>
                                <g id="Group_1469" data-name="Group 1469" opacity="0.15">
                                    <g id="reflection" data-name="Group 1468">
                                        <path id="Path_2716" data-name="Path 2716" d="M1702.2,272.5h0l-.6-2.2a3.925,3.925,0,0,0,2.1-3.5v-.3a4.012,4.012,0,0,0-4-4h0a4.027,4.027,0,0,0-3.7,2.5l-7.6-.1a152.177,152.177,0,0,0-6.6-43.4h5a19.776,19.776,0,0,0,9.9-16.2H1695l.9-4.8,2.3-1.4h.7v-.4a81.886,81.886,0,0,0-18.2-8.6h0l-.6-2.2a3.926,3.926,0,0,0,2.1-3.5v-.3a4,4,0,0,0-8,0h0v.3a5.021,5.021,0,0,0,.2,1.2l-6.8,3.8a157.247,157.247,0,0,0-32.2-38.6,18.248,18.248,0,0,0,.9-5.1h-1.7l.9-4.8,2.3-1.4h.7v-.4a81.906,81.906,0,0,0-18.2-8.6l-.6-2.2a3.925,3.925,0,0,0,2.1-3.5v-.3a4,4,0,0,0-8,0v.3a3.976,3.976,0,0,0,1.7,3.2l-1.6,2.7c-2,.6-3.9,1.2-5.6,1.8a149.757,149.757,0,0,0-52.2-16.6,84.809,84.809,0,0,0-16.2-7.4l-.6-2.2a3.923,3.923,0,0,0,2.1-3.5v-.3a4,4,0,0,0-8,0h0v.3a3.824,3.824,0,0,0,1.8,3.2l-.9,2.1.9.1a65.312,65.312,0,0,0-18.5,7.7,146.828,146.828,0,0,0-51.9,17c-1.7-.7-3.2-1.4-4.5-1.8l-2.2-3.8a4.2,4.2,0,0,0,1.2-2.8v-.3a4,4,0,1,0-8,0h0v.3a3.821,3.821,0,0,0,1.8,3.2l-.9,2.1.9.1a60.469,60.469,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1a13.455,13.455,0,0,0,.9,7.9,150.441,150.441,0,0,0-29.7,36.3l-7.2-4a3.064,3.064,0,0,0,.3-1.3v-.3a4,4,0,0,0-8,0v.3a3.821,3.821,0,0,0,1.8,3.2l-.9,2.1.9.1a60.472,60.472,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h8.2a151.81,151.81,0,0,0-6.7,43.4l-7.7.1h0a4,4,0,1,0-8,0h0v.3a3.821,3.821,0,0,0,1.8,3.2l-.9,2.1.9.1a60.47,60.47,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h19.7a19.072,19.072,0,0,0,6.3-5.7,147.338,147.338,0,0,0,16.4,43.6l-6.6,3.9a3.859,3.859,0,0,0-3.3-1.9,4.012,4.012,0,0,0-4,4h0v.3a3.824,3.824,0,0,0,1.8,3.2l-.9,2.1.9.1a60.482,60.482,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h19.7a19.776,19.776,0,0,0,9.9-16.2h-1.7l.9-4.8,2.3-1.4h.7v-.4a81.91,81.91,0,0,0-18.2-8.6h0l-.6-2.2a3.924,3.924,0,0,0,2.1-3.5v-.3c0-.1-.1-.1-.1-.3l7-4a152.1,152.1,0,0,0,53.7,54.1l-3.4,6.1a3.194,3.194,0,0,0-1.4-.3,4.011,4.011,0,0,0-4,4h0v.3a3.823,3.823,0,0,0,1.8,3.2l-.9,2.1.9.1a60.5,60.5,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h19.7a19.776,19.776,0,0,0,9.9-16.2h-1.7l.9-4.8,2.3-1.4h.7v-.4a81.906,81.906,0,0,0-18.2-8.6h0l-.6-2.2a3.925,3.925,0,0,0,2.1-3.5v-.3a3.864,3.864,0,0,0-1.1-2.7l3.6-6.1a151.5,151.5,0,0,0,73.7,20.1,4.025,4.025,0,0,0-1.6,3.2v.3a4.174,4.174,0,0,0,1.8,3.4l-.9,2.1.9.1a61.619,61.619,0,0,0-20,8.7l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h19.8c9.9-5.6,9.9-16.3,9.9-16.3h-1.7l.9-4.8,2.3-1.4h.7v-.4a85.421,85.421,0,0,0-18.3-8.7l-.6-2.2a4.041,4.041,0,0,0,2.1-3.5v-.3a3.886,3.886,0,0,0-1.6-3.2,151.144,151.144,0,0,0,71-19.4l4.4,7.4a4.135,4.135,0,0,0-.5,1.9v.3a3.821,3.821,0,0,0,1.8,3.2l-.9,2.1.9.1a60.469,60.469,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h19.7a19.776,19.776,0,0,0,9.9-16.2h-1.7l.9-4.8,2.3-1.4h.7v-.4a81.886,81.886,0,0,0-18.2-8.6l-.6-2.2a3.926,3.926,0,0,0,2.1-3.5v-.3a4.012,4.012,0,0,0-4-4h0a4.394,4.394,0,0,0-2.2.7l-4-7.1a152.411,152.411,0,0,0,54.3-53.9l5.7,3.2a3.193,3.193,0,0,0-.3,1.4v.3a3.821,3.821,0,0,0,1.8,3.2l-.9,2.1.9.1a60.469,60.469,0,0,0-20,8.8l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h19.7a19.776,19.776,0,0,0,9.9-16.2h-1.7l.9-4.8,2.3-1.4h.7v-.4a81.906,81.906,0,0,0-18.2-8.6h0l-.6-2.2a3.925,3.925,0,0,0,2.1-3.5v-.3a3.928,3.928,0,0,0-3.9-4,4.3,4.3,0,0,0-2.8,1.1l-5.8-3.4a151.945,151.945,0,0,0,15.9-40,24.355,24.355,0,0,0,4.3,3.5h19.7a19.776,19.776,0,0,0,9.9-16.2h-1.7l.9-4.8,2.3-1.4h.7v-.4A42.889,42.889,0,0,0,1702.2,272.5Zm-324.5-6.4,8,.1c0,2.6.1,5.3.2,7.9a78.325,78.325,0,0,0-9.5-3.8l-.6-2.2A4.562,4.562,0,0,0,1377.7,266.1Zm-20.1,19.2-.8-4.5h29.6c.1,1.6.4,3.2.6,4.8Zm53.1,77-.4,4.8-29-.3h-2.4l-.8-4.5Zm59.9,59.8-.4,4.8-31.4-.4-.8-4.5h32.6Zm82.3,19.4-31.5-.4-.8-4.5h32.8Zm81.7-18.3-.4,4.8-31.4-.4-.8-4.5h32.6Zm57.5-59.6-.4,4.8-29-.3h-2.4l-.8-4.5Zm1.5-163.4-.4,4.8-17.5-.2c-.6-1.6-1.4-3.1-2.1-4.6Zm-18.3-13.4c.2.2.4.3.6.5l-.9,2.1.9.1c-2.5.6-4.8,1.4-6.9,2.1-.1-.3-.3-.5-.4-.8Zm-6.9,13.4c.7,1.5,1.4,3,2.2,4.6l-8.8-.1-.8-4.5Zm-3.7-6.9c-.6.3-1.3.6-1.9.9l1.8-1.1c.1.1.1.1.1.2Zm-1.1-2-25.5,14.4a117.525,117.525,0,0,0-41.1-41.2l4.3-7.6a20.7,20.7,0,0,0,5.4,4.8h19.7a19.257,19.257,0,0,0,6.9-6.7,145.059,145.059,0,0,1,30.3,36.3Zm-135.7,63c-.6.5-1.1,1-1.7,1.6l-66-37a90.5,90.5,0,0,1,30.5-30.4Zm-34.2-67.5a88.382,88.382,0,0,1,41.7-11.1l-.7,75.4a15.482,15.482,0,0,0-2.3.6Zm29.8,73.5a8.3,8.3,0,0,0-.6,2.1l-75.7.9a88.986,88.986,0,0,1,11.3-41.5Zm-.8,7.2a8.526,8.526,0,0,0,.3,2.3l-64.9,38.6a89.27,89.27,0,0,1-10.9-41.6Zm2.2,7.1a11.75,11.75,0,0,0,1.7,2.2L1490,342.1a89.614,89.614,0,0,1-30.2-30.7Zm5.9,5.1a17.063,17.063,0,0,0,3.8,1.3l.9,74.2a89.294,89.294,0,0,1-42.5-11.5Zm8.9,1.4c.7-.1,1.4-.4,2.2-.6l38,63.9a89.961,89.961,0,0,1-40.8,10.8Zm2.5-29.3a10.143,10.143,0,0,0-2.5-.6l-.9-75.4a90.064,90.064,0,0,1,41.8,11.2Zm41.3-63.2a91.676,91.676,0,0,1,30.6,30.7l-65.6,37a11.378,11.378,0,0,0-1.9-1.9Zm-37.2,89.5a15.3,15.3,0,0,0,2.2-2.2l65.1,36.5a90.78,90.78,0,0,1-30.9,30.4Zm4.7-6.7a13.56,13.56,0,0,0,.6-2.9l75.2-.9a88.881,88.881,0,0,1-11.5,41.8Zm.6-8a26.4,26.4,0,0,0-.6-2.7l64.8-38.5a89.072,89.072,0,0,1,11,41.9Zm75-51.2a104.836,104.836,0,0,0-36.1-36.1l4.8-8.4a113.77,113.77,0,0,1,39.7,39.8Zm-38.8-37.7a104.941,104.941,0,0,0-49.2-13.2l-.1-9.7a111.952,111.952,0,0,1,54.2,14.6Zm-52.3-13.2a102.983,102.983,0,0,0-49.1,13.1l-5-8.3a113.264,113.264,0,0,1,54.2-14.5ZM1483.7,176a103.7,103.7,0,0,0-35.9,35.9l-8.4-4.8a114.884,114.884,0,0,1,39.7-39.6Zm-37.6,38.6a103.834,103.834,0,0,0-13.2,49l-9.7.1a113.73,113.73,0,0,1,14.6-54Zm-13.2,52.1a104.233,104.233,0,0,0,12.9,49.1l-8.3,5a114.108,114.108,0,0,1-14.3-54.1Zm14.4,51.7a103.687,103.687,0,0,0,35.7,36.1l-4.8,8.4a114.6,114.6,0,0,1-39.4-39.8Zm38.4,37.7a103.915,103.915,0,0,0,49.9,13.5l.1,9.7a113.1,113.1,0,0,1-55-14.9Zm53.1,13.5a103.344,103.344,0,0,0,48.3-12.8l5,8.3a112.14,112.14,0,0,1-53.4,14.2Zm51-14.3a105.116,105.116,0,0,0,36.4-35.9l8.4,4.8a113.771,113.771,0,0,1-40,39.5Zm37.9-38.6a102.642,102.642,0,0,0,13.4-49.3l9.7-.1a112.238,112.238,0,0,1-14.8,54.3Zm13.4-52.4a104.165,104.165,0,0,0-13.1-49.4l8.3-5a113.186,113.186,0,0,1,14.4,54.5Zm-7.8-123.9-.4,4.8-3.9-.1c-2.2-1.7-4.3-3.2-6.6-4.8h10.9Zm-22.8,0h3.4c2.5,1.5,4.8,3.1,7.1,4.7l-13-.1Zm-5.3,4.6-3.8-.1-.8-4.5h7.2Zm-50.4-25.1a145.009,145.009,0,0,1,48,14.5,50.281,50.281,0,0,0-7.1,4.1l-.1.1v.4h.6l1.9,1.4,1,4.5H1598a14.356,14.356,0,0,0,1.6,9.5l-5.1,8.7a116.651,116.651,0,0,0-56.2-15l-.1-8.4h7.7a19.776,19.776,0,0,0,9.9-16.2h-1.7Zm-2-.3-.4,3.7-14.3-.1-.1-4.4A145.192,145.192,0,0,1,1552.8,119.6Zm-16.9-.8-.1,4.3L1521,123l-.6-3.2a114.2,114.2,0,0,1,15.5-1Zm-17.8,1.2.6,3h-1.1s-2.4,9.8,8.7,16.7h9.4l-.1,8.4a116.264,116.264,0,0,0-56.1,15l-7.1-12a20,20,0,0,0,1.2-6h-1.7l.9-4.8,2.3-1.4h.7v-.4a57.173,57.173,0,0,0-5.8-3.3,141.48,141.48,0,0,1,48.1-15.2Zm-47.5,20.2-.4,4.8h-1.3l-2.9-4.8Zm-10,0h2.8l2.7,4.8-12.6-.1c2.4-1.6,4.7-3.2,7.1-4.7Zm-8.5,0c-2.2,1.4-4.3,3-6.3,4.5l-6.9-.1-.8-4.5h14Zm-13.5,16.4a23.825,23.825,0,0,0,5.3,4.7h19.7a20.217,20.217,0,0,0,7.4-7.4l6,10.6a116.675,116.675,0,0,0-41,41l-25.5-14.3A151.186,151.186,0,0,1,1438.6,156.6Zm-27.7,43.1-.4,4.8-6.9-.1c.7-1.6,1.5-3.2,2.3-4.8Zm-12.5-13.3,7.1,4.2-.6,1.2c-2.7-1.2-5.1-2-6.8-2.6h0l-.6-2.2Zm-19.3,17.8-.8-4.5h22.3c-.7,1.5-1.4,3.1-2.2,4.7Zm18.2,16.6h6.9a19.776,19.776,0,0,0,9.9-16.2h-1.7l.9-4.8,2.3-1.4h.7v-.5a71.378,71.378,0,0,0-7.1-4c.1-.3.3-.5.4-.8l25.2,14.9a117.858,117.858,0,0,0-15.1,55.9l-29.2.4A141.727,141.727,0,0,1,1397.3,220.8Zm5.9,104.8c-1.9-4.1-3.5-8.3-5-12.6-1.4-4.3-2.7-8.6-3.8-12.9-.5-2.2-1-4.4-1.4-6.6-.4-1.7-.6-3.5-.9-5.3-.3-2-.6-4-.8-6.1l.3-1.4,2.3-1.4h.7v-.4c-1.3-.9-2.6-1.6-3.8-2.3-.3-3.4-.4-6.9-.4-10.3l29.2.3a115.686,115.686,0,0,0,14.8,56l-25.1,14.9C1409.1,337.5,1403.7,326.6,1403.2,325.6Zm7.1,13.7,25.5-14.4a117.5,117.5,0,0,0,40.8,41.2l-14.3,25.5A145.617,145.617,0,0,1,1410.3,339.3Zm68.7,28.2a116.843,116.843,0,0,0,56.8,15.4l.4,29.2a145.872,145.872,0,0,1-72.1-19.4Zm59.4,44.6.3-29.2a116.569,116.569,0,0,0,55.3-14.7l14.9,25.1A144.131,144.131,0,0,1,1538.4,412.1Zm72.4-19.8-14.4-25.5a118.634,118.634,0,0,0,41.4-41l25.5,14.3a148.323,148.323,0,0,1-52.5,52.2Zm72.4-114.7a41.459,41.459,0,0,0-5.7,3.5l-.1.1v.4h.6l1.9,1.4,1,4.5h-1.1a14.907,14.907,0,0,0,.9,7.8,147.19,147.19,0,0,1-16.4,43.1l-25.2-14.9a116.66,116.66,0,0,0,15.3-56.2l29.2-.4C1683.6,270.4,1683.5,274,1683.2,277.6Zm-28.7-13.2a116.931,116.931,0,0,0-14.9-56.3l16.4-9.7v.4h.6l1.9,1.4,1,4.5h-1.1s-2.4,9.8,8.7,16.7h9.9a149,149,0,0,1,6.8,43.4Zm33.9,2.4,7.4-.1v.1a3.821,3.821,0,0,0,1.8,3.2l-.9,2.1.9.1a65.754,65.754,0,0,0-9.5,3.1C1688.2,272.5,1688.3,269.6,1688.4,266.8Zm26.2,21-27.8-.3q.3-2.25.6-4.5h27.7Z" fill="#d2d2d2"></path>
                                    </g>
                                    <g id="Group_1468" data-name="Group 1468">
                                        <path id="Stand" d="M1611.6,618.9l-66.4-331a20.087,20.087,0,1,0-16.8-.2L1462,619l12.3-.1,58.2-329.7a18.158,18.158,0,0,0,4.6.6,18.393,18.393,0,0,0,4.1-.4l58.1,329.5Z" fill="#d2d2d2"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="checkout-inner-content-area mb-5">
                                    <h4 className="ticket-name">Regular Tickets</h4>
                                    <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding">
                                        <div className="product-increment-decrement">
                                            <div className="prodcut-info">
                                                <ul>
                                                    <li>
                                                        <img src="./assets/images/ticketpurchase/fantasy.png" alt="ticket purchase logo" />
                                                    </li>
                                                </ul>
                                                <p className="pt-3">Buy one get one offer. see details for more</p>
                                            </div>
                                            <div className="single-product-increment-decrement">
                                                <div className="product-quantity-content">
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" defaultValue="1" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <h4 className="product-price">TK 300</h4>
                                                    <p>Kids (below 4)</p>
                                                </div>
                                                <div className="product-quantity-content">
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" defaultValue="2" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <h4 className="product-price">TK 500</h4>
                                                    <p>Adult Entry 3 Rides</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-details-cart-btn mt-25">
                                            <div className="prodcut-details-btn">	<Link to="#detailsmodal" className="details-ancor" data-toggle="modal">Details</Link>
                                            </div>
                                            <div className="prodcut-add-to-cart">
                                                <button className="disable-payment-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-inner-content-area mb-5">
                                    <h4 className="ticket-name">Free Deals</h4>
                                    <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding">
                                        <div className="product-increment-decrement">
                                            <div className="prodcut-info">
                                                <ul>
                                                    <li>
                                                        <img src="./assets/images/ticketpurchase/fantasy.png" alt="ticket purchase logo" />
                                                    </li>
                                                    <li>
                                                        <img src="./assets/images/ticketpurchase/water.png" alt="ticket purchase logo" />
                                                    </li>
                                                </ul>
                                                <p className="pt-3">Buy one get one offer. see details for more</p>
                                            </div>
                                            <div className="single-product-increment-decrement">
                                                <div className="product-quantity-content">
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" value="1" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <h4 className="product-price">TK 300</h4>
                                                    <p>Kids (below 4)</p>
                                                </div>
                                                <div className="product-quantity-content">
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" value="2" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <h4 className="product-price">TK 500</h4>
                                                    <p>Adult Entry 3 Rides</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-details-cart-btn mt-25">
                                            <div className="prodcut-details-btn">	<Link to="#detailsmodal" data-toggle="modal" className="details-ancor">Details</Link>
                                            </div>
                                            <div className="prodcut-add-to-cart">
                                                <button className="disable-payment-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-inner-content-area mb-5">
                                    <h4 className="ticket-name">Discount Deals</h4>
                                    <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding">
                                        <div className="product-increment-decrement">
                                            <div className="prodcut-info">
                                                <ul>
                                                    <li>
                                                        <img src="./assets/images/ticketpurchase/fantasy.png" alt="ticket purchase logo" />
                                                    </li>
                                                </ul>
                                                <p className="pt-3">Buy one get one offer. see details for more</p>
                                            </div>
                                            <div className="single-product-increment-decrement">
                                                <div className="product-quantity-content">
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" value="1" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <h4 className="product-price">TK 300</h4>
                                                    <p>Kids (below 4)</p>
                                                </div>
                                                <div className="product-quantity-content">
                                                    <tr>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <button className="dec qtybtn">-</button>
                                                                <input type="number" value="2" />
                                                                <button className="inc qtybtn">+</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <Link to="/detail" >Abc</Link>
                                                    <h4 className="product-price">TK 500</h4>
                                                    <p>Adult Entry 3 Rides</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-details-cart-btn mt-25">
                                            <div className="prodcut-details-btn">	<Link to="#detailsmodal" data-toggle="modal" className="details-ancor">Details</Link>
                                            </div>
                                            <div className="prodcut-add-to-cart">
                                                <button className="disable-payment-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-inner-content-area mb-5">
                                    <h4 className="ticket-name">Package Offers</h4>
                                    <div className="single-prodcut-content-ticket ticket-product-bg ticket-prodcut-padding">
                                        <div className="product-increment-decrement">
                                            <div className="prodcut-info">
                                                <ul>
                                                    <li>
                                                        <img src="./assets/images/ticketpurchase/fantasy.png" alt="ticket purchase logo" />
                                                    </li>
                                                </ul>
                                                <p className="pt-3">Buy one get one offer. see details for more</p>
                                            </div>
                                            <div className="single-product-increment-decrement">
                                                <div className="product-quantity-content">
                                                    <td className="pro-quantity">
                                                        <div className="pro-qty">
                                                            <button className="dec qtybtn">-</button>
                                                            <input type="number" value="1" />
                                                            <button className="inc qtybtn">+</button>
                                                        </div>
                                                    </td>
                                                    <h4 className="product-price">TK 300</h4>
                                                    <p>Kids (below 4)</p>
                                                </div>
                                                <div className="product-quantity-content">
                                                    <td className="pro-quantity">
                                                        <div className="pro-qty">
                                                            <button className="dec qtybtn">-</button>
                                                            <input type="number" value="2" />
                                                            <button className="inc qtybtn">+</button>
                                                        </div>
                                                    </td>
                                                    <h4 className="product-price">TK 500</h4>
                                                    <p>Adult Entry 3 Rides</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-details-cart-btn mt-25">
                                            <div className="prodcut-details-btn">	<Link to="#detailsmodal" data-toggle="modal" className="details-ancor">Details</Link>
                                            </div>
                                            <div className="prodcut-add-to-cart">
                                                <button className="disable-payment-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="single-widget summary-widget mt-5">
                                    <div className="ticket-widget-content-title">
                                        <h3>Summary</h3>
                                    </div>
                                    <div className="ticket-widget-content-inner first-ticket-widget" id="oneticket">
                                        <ul>
                                            <li>
                                                <h5>Regular Ticket</h5>
                                                <p>for Fantasy Kingdom</p>
                                            </li>
                                            <li>
                                                <h5>TK 1000+ TK 300</h5>
                                                <p>2 Adult + 1 Child</p>
                                            </li>
                                        </ul>
                                        <p>No Food</p>
                                        <button className="remove-btn" id="remove-ticket-one">Remove</button>
                                    </div>
                                    <div className="ticket-widget-content-inner second-titket-widget" id="twoticket">
                                        <ul>
                                            <li>
                                                <h5>Free Deals</h5>
                                                <p>for Fantasy+ Water</p>
                                            </li>
                                            <li>
                                                <h5>TK 1000</h5>
                                                <p>2 Adult</p>
                                            </li>
                                        </ul>
                                        <p>Free Lunch</p>
                                        <button className="remove-btn" id="remove-ticket-two">Remove</button>
                                    </div>
                                    <div className="widget-checkout-money">
                                        <h4 className="total-price-widget">Total : 1300 BDT</h4>
                                        <div className="widget-chekout-btn-area mt-3 text-center">	<Link to="/" className="payment-btn">Check Out</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="modal fade ticket-modal-area" id="detailsmodal" tabIndex="-1" role="dialog" aria-labelledby="detailsmodal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content ticket-modal-content">
                            <div className="modal-header ticket-modal-header">
                                <h5 className="modal-title ticekt-modal-title">Regular Tickets</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body ticket-body-modal-content">
                                <h4 className="ticket-modal-body-title">Offers Details</h4>
                                <ul>
                                    <li>Adult : Entry + 3 Rides = Tk. 500</li>
                                    <li>Kids (below 4) : Entry = Tk. 300</li>
                                    <li>Adult : Entry + All Rides (8 Rides)(Package Ashu) = Tk. 850</li>
                                    <li>Kids (below 4) : Entry + All Rides Once (8 Rides) (Package Ashu) = Tk.500</li>
                                    <li>Adult : Entry + All Rides (Package Lia) = Tk.600</li>
                                    <li>Kids (below 4): Entry + All Rides Once (Package Lia) = Tk.500</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add-item">	<span>Item added your cart</span>
                </div>
            </div>
        )
    }
}
export default Tickets
