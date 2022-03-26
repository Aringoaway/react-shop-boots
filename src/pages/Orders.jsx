import React from "react";
import Card from "../components/Card";
import axios from "axios";

function Orders () {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://623475ebdebd056201e599c9.mockapi.io/orders');
            console.log("data" , data)
        })();
    }, [])
    return(
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>My orders</h1>

            </div>
            <div className="d-flex flex-wrap">
                {
                    [].map((item, index) => (
                        <Card
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders;