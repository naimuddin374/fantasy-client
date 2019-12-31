import React from 'react'
import ItemList from './ItemList';

class TicketItem extends React.Component {

    render() {
        return (
            <div className="col-lg-9 col-md-12">
                <ItemList
                    rides={this.props.rides}
                    paramId={this.props.paramId}
                    quantityMinusHandler={this.props.quantityMinusHandler.bind(this)}
                    quantityAddHandler={this.props.quantityAddHandler.bind(this)}
                    addToCartHandler={this.props.addToCartHandler.bind(this)}
                />
            </div>
        )
    }
}
export default TicketItem