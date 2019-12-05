import React from 'react'
class FeatureIcon extends React.Component {
    render() {
        let { type } = this.props
        return (
            <div className="room-suite-features">
                <div className="single-room-feature">
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />{type === "1" ? 'Non Air-conditioned Room' : 'Air-conditioned Room'}</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Credit Card Facility</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />En-suite Bathroom</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Convenience Store</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Telephone</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Laundry Service</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Cable TV</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Cyber Café/Wi-Fi</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Car Parking</li>
                        <li><img src={`${process.env.PUBLIC_URL}/assets/images/atlantis/feature_icon.png`} alt="atlantis feature icon" />Restaurant</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default FeatureIcon
