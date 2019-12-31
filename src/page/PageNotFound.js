import React from 'react'
import { Link } from 'react-router-dom'


class PageNotFound extends React.Component {
    render() {
        return (
            <section className="fantasy-faq page-not-found">
                <img src={`${process.env.PUBLIC_URL}/assets/images/2667875.jpg`} alt="404 Not Found" />
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6 offset-3">
                            <h2>404</h2>
                            <h4>Page not found <Link to={`${process.env.PUBLIC_URL}/`}> Go Back </Link></h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default PageNotFound
