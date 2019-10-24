import React from 'react'
import HomeSlider from './HomeSlider'
import HomeShortLink from './HomeShortLink'
import DiscoverPackage from './DiscoverPackage'
import HomeDirection from './HomeDirection'
import HomeBenefits from './HomeBenefits'
import HomeThings from './HomeThings'
import HomeTicket from './HomeTicket'
import HomeNewsletter from './HomeNewsletter'
import HomeNewEvents from './HomeNewEvents'
import HomeAward from './HomeAward'

class HomePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <HomeSlider />
                <HomeShortLink />
                <DiscoverPackage />
                <HomeDirection />
                <HomeBenefits />
                <HomeThings />
                <HomeTicket />
                <HomeNewsletter />
                <HomeNewEvents />
                <HomeAward />
            </div>
        )
    }
}
export default HomePage
