import React from 'react'
import ShortLink from '../../components/ShortLink'
import Map from './Map'
import Discount from './Discount'
import FantasyGallery from './Gallery'
import Shopping from './Shopping'
import Faq from './Faq';
import Things from './Things'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import * as Types from '../../store/actions/types'
import YouTube from 'react-youtube';

class FantasyKingdom extends React.Component {
    state = {
        fantasy: {}
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        Axios.get(`api/service/${Types.PATH_NAME}`)
            .then(res => {
                this.setState({
                    fantasy: res.data
                })
            })
    }
    onReady(event) {
        event.target.pauseVideo();
    }
    render() {
        let { fantasy } = this.state
        const opts = {
            height: '320',
            width: '100%',
            playerVars: {
                autoplay: 0
            }
        }

        let videoLink = ''
        if (Object.keys(fantasy).length !== 0) {
            videoLink = fantasy[0].video
        }
        console.log(fantasy)
        return (
            <div>
                <ShortLink />

                <section className="breadcrum-area fantasy-feature-img relative">
                    <div className="breadcrum-feature-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                                <div className="breadcrum-wrapper text-center">
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Fun For The Whole Family</h2>
                                    <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".6s">Welcoming everyone with a smile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="select-park-option-area fantasy-select-park-bg">
                    <div className="container">
                        <div className="row row-center">
                            <div className="col-lg-3 col-md-3">
                                <img src="./assets/images/headerlogo.png" alt="logo" />
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="fantasy-park-search-item float-right">
                                    <form action="#">
                                        <div className="single-fantasy-park-search">
                                            <div className="fantasy-parki-select-item">
                                                {/* <select defaultValue={selectedVal} id="fantasysearchtype" className="form-control" style={{ display: "none" }}>
                                                    <option selected="">Select Other park & resorts</option>
                                                </select> */}
                                                <div className="nice-select fantasy-nice-select" tabIndex="0"><span className="current">Select Other park & resorts</span>
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

                <Map />

                <Things />

                <Discount />

                <FantasyGallery />

                <section className="experience-area relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title fantasy-section-title mb-40">
                                    <h2>Experience VR</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="experience-img relative experiencebg">
                                    {/* <img src="./assets/images/experiencebg.png" alt="experience background" /> */}
                                    <YouTube
                                        videoId={videoLink}
                                        opts={opts}
                                        onReady={this.onReady}
                                    />
                                    {/* <div className="ex-video-icon"> <Link to={`https://www.youtube.com/watch?v=${videoLink}`} className="exp-play-btn">
                                        <i className=" fa fa-play"></i>
                                    </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Shopping />

                <Faq />

            </div >
        )
    }
}
export default FantasyKingdom
