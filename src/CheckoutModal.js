import React from 'react';
import './CheckoutModal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

function CheckoutModal({ isOpen, onClose }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    if (!isOpen) return null;

    const handleProceed = () => {
        setIsProcessing(true);

        // Simulating payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);

            // Add to orders
            dispatch({
                type: 'ADD_ORDER',
                order: {
                    basket: basket,
                    amount: getBasketTotal(basket),
                    created: new Date().getTime()
                }
            });

            // Empty the basket
            dispatch({
                type: 'EMPTY_BASKET'
            });

            // Redirect to orders after showing success message
            setTimeout(() => {
                onClose();
                setIsSuccess(false); // reset for next time
                history.push('/orders');
            }, 2500);
        }, 2000);
    };

    return (
        <div className="checkoutModal__overlay">
            <div className={`checkoutModal ${isSuccess ? 'checkoutModal--success' : ''}`}>
                <div className="checkoutModal__header">
                    {!isSuccess ? (
                        <>
                            <CheckCircleOutlineIcon className="checkoutModal__successIcon" />
                            <h2>{isProcessing ? 'Processing Payment...' : 'Ready to Checkout?'}</h2>
                        </>
                    ) : (
                        <>
                            <div className="checkoutModal__celebration">🎉</div>
                            <h2 className="checkoutModal__successTitle">Payment Successful!</h2>
                        </>
                    )}
                    {!isProcessing && !isSuccess && <CloseIcon className="checkoutModal__close" onClick={onClose} />}
                </div>

                <div className="checkoutModal__content">
                    {!isSuccess ? (
                        <>
                            <p className="checkoutModal__summary">
                                {isProcessing ? 'Please do not refresh the page.' : `You have ${basket?.length} items in your basket.`}
                            </p>

                            <div className="checkoutModal__price">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <span>Total Amount:</span>
                                            <strong>{value}</strong>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                            </div>

                            {!user && !isProcessing && (
                                <p className="checkoutModal__guestWarning">
                                    Checking out as <strong>Guest</strong>.
                                </p>
                            )}
                        </>
                    ) : (
                        <div className="checkoutModal__successMessage">
                            <p>Thank you for your purchase!</p>
                            <p><strong>Your order is on its way!</strong></p>
                            <p className="checkoutModal__redirectNote">Redirecting to your orders...</p>
                        </div>
                    )}
                </div>

                {!isProcessing && !isSuccess && (
                    <div className="checkoutModal__actions">
                        <button className="checkoutModal__cancel" onClick={onClose}>
                            Keep Shopping
                        </button>
                        <button className="checkoutModal__confirm" onClick={handleProceed}>
                            Go to Payment
                        </button>
                    </div>
                )}

                {isProcessing && (
                    <div className="checkoutModal__loader">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckoutModal;
