import React from "react";
import Card from "../components/Card";
function Orders () {
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