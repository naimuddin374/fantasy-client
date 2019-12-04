import React from 'react'
import Search from './Search'
import CircleShape from '../common/CircleShape'
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
                            <TicketItem paramId={this.props.match.params.id} />
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
