import React from 'react'

class HomeAward extends React.Component {
    render() {
        return (
            <section className="award-area pt-5 full-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title fantasy-section-title text-center pb-40">
                                <h2>Awards & Accolades</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                            <div className="award-img">
                                <img src="./assets/images/award/Awards.png" alt="award img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HomeAward
