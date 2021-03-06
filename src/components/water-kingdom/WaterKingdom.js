import React from 'react'
import Map from '../common/Map'
import Discount from '../common/Discount'
import Gallery from '../common/Gallery'
import Shopping from '../common/Shopping'
import Faq from '../common/Faq';
import Things from '../common/Things'
import Slider from '../common/Slider'
import InnerSearch from '../common/InnerSearch'
import Video from '../common/Video'
import $ from 'jquery';


class WaterKingdom extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        if (window.innerWidth < 980) {
            $("#main-menu").hide('slow');
        }
    }
    render() {
        return (
            <div>
                <Slider />

                <InnerSearch className="water" />

                <Map className="water" />

                <Things className="water" />

                <Discount />

                <Gallery className="water" />

                <Video className="water" />

                <Shopping className="water" />

                <Faq className="water" />

            </div>
        )
    }
}
export default WaterKingdom
