import React from 'react'
import Item from './Item'
import { DISCOUNT_TAG } from '../../store/actions/types'
import $ from 'jquery';


class ItemList extends React.Component {

    componentDidMount() {

        function useSameHeight(el) {
            var max = 0;
            el.css('height', 'auto');
            el.each(function () {
                max = Math.max(max, $(this).height());
            }).height(max);
            return el;
        }
        $(window).resize(function () {
            useSameHeight($('.prodcut-info>p'));
        }).resize();


        function cardcontent(el) {
            var max = 0;
            el.css('height', 'auto');
            el.each(function () {
                max = Math.max(max, $(this).height());
            }).height(max);
            return el;
        }
        $(window).resize(function () {
            cardcontent($('.prodcut-info h4'));
        }).resize();


    }

    render() {
        let { rides, paramId } = this.props
        let { quantityMinusHandler, quantityAddHandler, addToCartHandler } = this.props


        return (
            <span>
                {paramId === DISCOUNT_TAG ?
                    <span>
                        <div className="checkout-inner-content-area mb-5">
                            <h4 className="ticket-name">Discount Ticket</h4>
                            {Object.keys(rides).length !== 0 &&
                                rides.map(item => (
                                    item.discount_price !== null &&
                                    <Item
                                        key={item.id}
                                        data={item}
                                        quantityMinusHandler={quantityMinusHandler.bind(this)}
                                        quantityAddHandler={quantityAddHandler.bind(this)}
                                        addToCartHandler={addToCartHandler.bind(this)}
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
                                        quantityMinusHandler={quantityMinusHandler.bind(this)}
                                        quantityAddHandler={quantityAddHandler.bind(this)}
                                        addToCartHandler={addToCartHandler.bind(this)}
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
                                        quantityMinusHandler={quantityMinusHandler.bind(this)}
                                        quantityAddHandler={quantityAddHandler.bind(this)}
                                        addToCartHandler={addToCartHandler.bind(this)}
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
                                        quantityMinusHandler={quantityMinusHandler.bind(this)}
                                        quantityAddHandler={quantityAddHandler.bind(this)}
                                        addToCartHandler={addToCartHandler.bind(this)}
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