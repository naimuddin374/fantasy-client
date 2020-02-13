import React from 'react';
import Map from '../common/Map'
import Discount from '../common/Discount'
import Gallery from '../common/Gallery'
import Shopping from '../common/Shopping'
import Faq from '../common/Faq';
import Things from '../common/Things'
import Slider from '../common/Slider'
import InnerSearch from '../common/InnerSearch'
import Video from '../common/Video'


class FantasyKingdom extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <div>
                <Slider />

                <InnerSearch className="fantasy" />

                <Map className="fantasy" />

                <Things className="fantasy" />

                <Discount />

                <Gallery className="fantasy" />

                <Video className="fantasy" />

                <Shopping className="fantasy" />

                <Faq className="fantasy" />
            </div>
        )
    }
}
export default FantasyKingdom
