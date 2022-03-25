import Info from "./Info";

function Drawer({ onClose, onRemove, items = [] }) {
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
                                        <b>21 205 Kč</b>
                                    </li>
                                    <li>
                                        <span>DPH 5%:</span>
                                        <div></div>
                                        <b>1 205 Kč</b>
                                    </li>
                                </ul>
                                <button className="greenButton">
                                    Checkout
                                    <img src="/img/arrow.svg" alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                        )
                         :
                        (
                            <Info
                                title="Empty cart"
                                description="Add at least one pair of sneakers to place an order"
                                image="/img/empty-cart.jpg"
                            />

                        )
                }






            </div>
        </div>
    );
}

export default Drawer;