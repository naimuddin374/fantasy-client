import React from 'react'
class Facility extends React.Component {
    render() {
        return (
            <div className="room-suite-features">
                <div className="single-room-feature">
                    <ul>
                        <li><h4>Amenities</h4></li>
                        <li>
                            <i className="fa fa-wifi" aria-hidden="true" /> WiFi &nbsp;
                            <i className="fa fa-car" aria-hidden="true" /> Free parking &nbsp;
                            <i className="fa fa-child" aria-hidden="true" /> Family rooms &nbsp;
                            <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Non-smoking rooms &nbsp;
                            <i className="fa fa-shopping-basket" aria-hidden="true" /> Room service &nbsp;<br />
                            <i className="fa fa-clock-o" aria-hidden="true" /> 24 hours front desk &nbsp;
                            <i className="fa fa-television" aria-hidden="true" /> Flat-screen TV &nbsp;
                            <i className="fa fa-coffee" aria-hidden="true" /> Tea&Coffee maker &nbsp;
                        </li>
                        <li><h4>Other Facilities</h4></li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Room rent includes complimentary Breakfast and FREE Entry + 3 Rides at Fantasy Kingdom & All Rides unlimited at Water Kingdom</li>
                        <li><h4>Reservation Procedure</h4></li>
                        <li><i className="fa fa-check" aria-hidden="true" /> At least 50% of total room rent is required to confirm booking in advance.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Booking of rooms have to be confirmed at least 24 hours before the boarding.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Check out time 12:00pm</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Facility
