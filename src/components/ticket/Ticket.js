import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import CircleShape from './CircleShape'
import Summary from './Summary'
import TicketItem from './TicketItem'

class Ticket extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Search />

                <section className="checkout-page-area section-padding">

                    <CircleShape />

                    <div className="container">
                        <div className="row">
                            <TicketItem />
                            <Summary />
                        </div>
                    </div>
                </section>

                <div className="add-item">	<span>Item added your cart</span>
                </div>
            </div>
        )
    }
}
export default Ticket
