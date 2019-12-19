import React from 'react'
class Facility extends React.Component {
    render() {
        return (
            <div className="room-suite-features">
                <div className="single-room-feature">
                    <ul>
                        <li><h3>Most Popular Facilities</h3></li>
                        <li>
                            <i className="fa fa-wifi" aria-hidden="true" /> WiFi &nbsp;
                            <i className="fa fa-car" aria-hidden="true" /> Free parking &nbsp;
                            <i className="fa fa-child" aria-hidden="true" /> Family rooms &nbsp;
                            <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Non-smoking rooms &nbsp;
                            <i className="fa fa-shopping-basket" aria-hidden="true" /> Room service &nbsp;
                            <i className="fa fa-clock-o" aria-hidden="true" /> 24 hours front desk &nbsp;
                            <i className="fa fa-television" aria-hidden="true" /> Flat-screen TV &nbsp;
                            <i className="fa fa-cafee" aria-hidden="true" /> Tea&Cafee maker &nbsp;
                        </li>
                        <li><h3>Other Facilities</h3></li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Room rent includes complimentary Breakfast and FREE Entry + 3 Rides at Fantasy Kingdom & All Rides unlimited at Water Kingdom</li>
                        <li><h3>Reservation Procedure</h3></li>
                        <li><i className="fa fa-check" aria-hidden="true" /> At least 50% of total room rent is required to confirm booking in advance.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Booking of rooms have to be confirmed at least 24 hours before the boarding.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Check out time 12:00pm</li>
                    </ul>
                    {/* <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Air-conditioned Room</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Credit Card Facility</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />En-suite Bathroom</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Convenience Store</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Telephone</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Laundry Service</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Cable TV</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Cyber Café/Wi-Fi</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Car Parking</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Restaurant</li> */}
                </div>
            </div>
        )
    }
}
export default Facility
