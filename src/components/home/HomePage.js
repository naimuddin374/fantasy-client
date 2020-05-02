import React from 'react'
import Slider from './Slider'
import ShortLink from './ShortLink'
import DiscoverPackage from './DiscoverPackage'
import Direction from './Direction'
import Benefits from './Benefits'
import Things from './Things'
import Ticket from './Ticket'
import Newsletter from './Newsletter'
import NewsEvents from './NewsEvents'
import Award from './Award'
import $ from 'jquery';


class HomePage extends React.Component {
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
                <ShortLink />
                <DiscoverPackage />
                <Direction />
                <Benefits />
                <Things />
                <Ticket />
                <Newsletter />
                <NewsEvents />
                <Award />
            </div>
        )
    }
}
export default HomePage
