import React from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

function Orders () {
    const { onAddToFavorite, onAddToCart } = React.useCallback(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, seIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://623475ebdebd056201e599c9.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                seIsLoading(false);
            } catch (error) {
                alert("Error while requesting orders");
                console.error(error);
            }
        })();
    }, [])
    return(
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>My orders</h1>

            </div>
            <div className="d-flex flex-wrap">
                {
                    (isLoading ? [...Array(12)] : orders).map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            loading={isLoading}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders;