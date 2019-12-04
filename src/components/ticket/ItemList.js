import React from 'react'
import Item from './Item'

class ItemList extends React.Component {
    render() {
        let { rides, paramId } = this.props
        return (
            <span>
                {paramId === "DC1000" ?
                    <span>
                        <div className="checkout-inner-content-area mb-5">
                            <h4 className="ticket-name">Discount Ticket</h4>
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (
                                    item.discount_price !== null &&
                                    <Item
                                        key={item.id}
                                        data={item}
                                        quantityMinusHandler={this.props.quantityMinusHandler.bind(this)}
                                        quantityAddHandler={this.props.quantityAddHandler.bind(this)}
                                        addToCartHandler={this.props.addToCartHandler.bind(this)}
                                    />
                                ))
                            }
                        </div>
                        <div className="checkout-inner-content-area mb-5">
                            <h4 className="ticket-name">Regular Tickets</h4>
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (
                                    item.discount_price === null &&
                                    <Item
                                        key={item.id}
                                        data={item}
                                        quantityMinusHandler={this.props.quantityMinusHandler.bind(this)}
                                        quantityAddHandler={this.props.quantityAddHandler.bind(this)}
                                        addToCartHandler={this.props.addToCartHandler.bind(this)}
                                    />
                                ))
                            }
                        </div>
                    </span>
                    : <span>
                        <div className="checkout-inner-content-area mb-5">
                            <h4 className="ticket-name">Regular Tickets</h4>
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (
                                    item.discount_price === null &&
                                    <Item
                                        key={item.id}
                                        data={item}
                                        quantityMinusHandler={this.props.quantityMinusHandler.bind(this)}
                                        quantityAddHandler={this.props.quantityAddHandler.bind(this)}
                                        addToCartHandler={this.props.addToCartHandler.bind(this)}
                                    />
                                ))
                            }
                        </div>
                        <div className="checkout-inner-content-area mb-5">
                            <h4 className="ticket-name">Discount Ticket</h4>
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (
                                    item.discount_price !== null &&
                                    <Item
                                        key={item.id}
                                        data={item}
                                        quantityMinusHandler={this.props.quantityMinusHandler.bind(this)}
                                        quantityAddHandler={this.props.quantityAddHandler.bind(this)}
                                        addToCartHandler={this.props.addToCartHandler.bind(this)}
                                    />
                                ))
                            }
                        </div>
                    </span>
                }
            </span>
        )
    }
}

export default ItemList