import React, { Component, Fragment } from 'react'
import ShortLinkDesktop from './ShortLinkDesktop'
import ShortLinkMobile from './ShortLinkMobile'

class ShortLink extends Component {
    render() {
        return (
            <Fragment>
                <ShortLinkDesktop />
                <ShortLinkMobile />
            </Fragment>
        )
    }
}
export default ShortLink
