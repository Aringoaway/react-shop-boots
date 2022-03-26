import React from "react";
import Info from "./Info";
import AppContext from "../context";
import axios from "axios";

//bad code because you have to remove every element. Mockapi does not have the required function to remove
const deley = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems,  setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const onCkickOrder = async () => {
        try{
            setIsLoading(true);
            const {data} = await axios.post('https://623475ebdebd056201e599c9.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            //bad code because you have to remove every element. Mockapi does not have the required function to remove
            for (let i = 0; i < cartItems.length ; i++) {
                const item = cartItems[i];
                await axios.delete('https://623475ebdebd056201e599c9.mockapi.io/cart/' + item.id);
                await deley(1000);
            }
        } catch (error) {
            alert("Failed to create order :(");
        }
        setIsLoading(false);
    }

    return(
        <div  className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Basket
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
                </h2>

                {
                    items.length > 0 ? (
                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {/*Render Cart items*/}
                                {
                                    items.map((obj) => (
                                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                            <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>

                                            <div className="mr-20 flex">
                                                <p className="mb-5">{obj.title}</p>
                                                <b>{obj.price}</b>
                                            </div>
                                            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Total:</span>
                                        <div></div>
                                        <b>{totalPrice} Kč</b>
                                    </li>
                                    <li>
                                        <span>DPH 5%:</span>
                                        <div></div>
                                        <b>{Math.round(totalPrice / 100 * 5)} Kč</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onCkickOrder} className="greenButton">
                                    Checkout
                                    <img src="/img/arrow.svg" alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                        )
                         :
                        (
                            <Info
                                title={isOrderComplete ? "Order is processed" : "Empty cart"}
                                description={isOrderComplete ? `Your order #${orderId} will be delivered to courier soon` : "Add at least one pair of sneakers to place an order"}
                                image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                            />

                        )
                }
            </div>
        </div>
    );
}

export default Drawer;