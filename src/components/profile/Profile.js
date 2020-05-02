import React from 'react'
import PersonalInfo from './PersonalInfo';
import OrderHistory from './OrderHistory';
import $ from 'jquery';

class Profile extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        if (window.innerWidth < 980) {
            $("#main-menu").hide('slow');
        }
    }
    render() {
        return (
            <section className="user-proifle-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-10 offset-lg-2 col-md-1">
                            <div className="user-profile-inner-content">
                                <div className="emp-profile">
                                    <PersonalInfo />
                                    <OrderHistory />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Profile
