import React from 'react'
const src = `${process.env.PUBLIC_URL}/assets/images/Map_FK-Complex-large.jpg`

class Maps extends React.Component {
    state = {
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%'
    }
    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
    }
    render() {
        return (
            <section className="section-padding maps-area">
                <div className="container">
                    <div className="form-row">
                        <div className="col-lg-6">
                            <figure onMouseMove={this.handleMouseMove} style={this.state}>
                                <img src={src} />
                            </figure>
                        </div>
                        <div className="col-lg-6 z-index-minus">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.674190942606!2d90.28915281538697!3d23.936588587554027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c386684b8de9%3A0xa51d15a3906d565c!2sFantasy%20Kingdom!5e0!3m2!1sen!2sbd!4v1577854192398!5m2!1sen!2sbd" width="100%" height="350" frameBorder="0" style={{ border: '0' }} allowFullScreen="" title="fantasy kingdom"></iframe>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7378.947273881079!2d91.78769767658677!3d22.37349531235424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9aa98405209%3A0xb103aae26078f9d2!2sFoy&#39;s%20Lake!5e0!3m2!1sen!2sbd!4v1577854606347!5m2!1sen!2sbd" width="100%" height="350" frameBorder="0" style={{ border: '0' }} allowFullScreen="" title="foys lake"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Maps
