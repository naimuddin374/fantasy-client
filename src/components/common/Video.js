import React from 'react'
import Axios from 'axios'
import YouTube from 'react-youtube';
import { API_URL } from '../../store/actions/types';


class Video extends React.Component {
    state = {
        service: {},
        className: this.props.className
    }
    componentDidMount() {
        Axios.get(`${API_URL}api/service${window.location.pathname}`)
            .then(res => {
                this.setState({
                    service: res.data
                })
            })
    }
    onReady(event) {
        event.target.pauseVideo();
    }
    render() {
        let { service, className } = this.state
        const opts = {
            height: '450',
            width: '100%',
            playerVars: {
                autoplay: 0
            }
        }
        let videoLink = ''
        if (Object.keys(service).length !== 0) {
            videoLink = service[0].video
        }
        return (
            <section className="experience-area relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className={`section-title ${className}-section-title mb-40`}>
                                <h2>Video Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="experience-img relative experiencebg">
                                {/* <img src="./assets/images/experiencebg.png" alt="experience background" /> */}
                                {videoLink &&
                                    <YouTube
                                        videoId={videoLink}
                                        opts={opts}
                                        onReady={this.onReady}
                                    />
                                }
                                {/* <div className="ex-video-icon"> <Link to={`https://www.youtube.com/watch?v=${videoLink}`} className="exp-play-btn">
                                        <i className=" fa fa-play"></i>
                                    </Link>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Video
