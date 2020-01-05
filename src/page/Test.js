import React from 'react'
import { airCreateReservationReqLog } from '../util/schema/airCreateReservationReq'
import { airPriceRes } from '../util/schema/airPriceResponse'

class Test extends React.Component {
    render() {
        airCreateReservationReqLog(airPriceRes, {})
        return (
            <section className="fantasy-faq section-padding">
                <h1>Welcome</h1>
            </section>
        )
    }
}
export default Test

