function Drawer({ onClose, onRemove, items = [] }) {
    return(
        <div  className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Basket
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
                </h2>

                {
                    items.length > 0 ? (
                        <div className="d-flex flex-column">
                            <div className="items">
                                {/*Render Cart items*/}
                                {
                                    items.map((obj) => (
                                        <div className="cartItem d-flex align-center mb-20">
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
                        (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="Empty box"/>
                        <h2>Empty cart</h2>
                        <p className="opacity-6">Add at least one pair of sneakers to place an order</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow"/>
                            Сome back
                        </button>
                    </div>)
                }






            </div>
        </div>
    );
}

export default Drawer;