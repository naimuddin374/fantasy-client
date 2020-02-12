import React from 'react'
import ShortLink from '../common/CircleShape'
import Map from '../common/Map'
import Discount from '../common/Discount'
import Gallery from '../common/Gallery'
import Shopping from '../common/Shopping'
import Faq from '../common/Faq';
import Things from '../common/Things'
import Slider from '../common/Slider'
import InnerSearch from '../common/InnerSearch'
import Video from '../common/Video'

class HeritagePark extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <ShortLink />

                <Slider />

                <InnerSearch className="heritage" />

                <Map className="heritage" />

                <Things className="heritage" />

                <Discount />

                <Gallery className="heritage" />

                <Video className="heritage" />

                <Shopping className="heritage" />

                <Faq className="heritage" />

            </div>
        )
    }
}
export default HeritagePark
