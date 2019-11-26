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

class ExtremeKingdom extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <ShortLink />

                <Slider />

                <InnerSearch className="xtreme" />

                <Map className="xtreme" />

                <Things className="xtreme" />

                <Discount />

                <Gallery className="xtreme" />

                <Video className="xtreme" />

                <Shopping className="xtreme" />

                <Faq className="xtreme" />
            </div>
        )
    }
}
export default ExtremeKingdom
