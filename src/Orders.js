import React from 'react';
import './Orders.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Orders() {
    const [{ orders, user }] = useStateValue();

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__container'>
                {orders?.length === 0 ? (
                    <div className="orders__empty">
                        <p>You have no orders yet. Go add some items!</p>
                    </div>
                ) : (
                    orders?.map((order, i) => (
                        <div key={i} className="orders__order">
                            <div className="orders__orderHeader">
                                <div>
                                    <p className="orders__label">ORDER PLACED</p>
                                    <p className="orders__value">{new Date(order.created).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="orders__label">TOTAL</p>
                                    <p className="orders__value">₹{order.amount}</p>
                                </div>
                                <div className="orders__id">
                                    <p className="orders__label">ORDER #</p>
                                    <p className="orders__value">114-729{order.created}</p>
                                </div>
                            </div>

                            {order.basket?.map((item, idx) => (
                                <CheckoutProduct
                                    key={idx}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    hideButton
                                />
                            ))}

                            <div className="orders__orderFooter">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3 className="order__total">Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={order.amount}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Orders;
