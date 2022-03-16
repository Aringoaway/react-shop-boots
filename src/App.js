import React from "react";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {
        title: 'Nike Blazer Mid Suede Men\'s Sneakers',
        price: 12999,
        imageUrl: '/img/sneakers/1.jpg'
    },
    {
        title: 'Nike Air Max 270 Men\'s Running Shoes',
        price: 15609,
        imageUrl: '/img/sneakers/2.jpg'
    },
    {
        title: 'Nike Blazer Mid Suede Men\'s Sneakers',
        price: 8499,
        imageUrl: '/img/sneakers/3.jpg'
    },
    {
        title: 'Puma X Aka Boku Future Rider sneakers',
        price: 8999,
        imageUrl: '/img/sneakers/4.jpg'
    }
];

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
            <Header
                onClickCart={() => setCartOpened(true)}
            />

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Search..." type="text"/>
                    </div>
                </div>
                <div className="d-flex">

                    {
                        arr.map((obj) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imgUrl={obj.imageUrl}
                                onFavorit={() => console.log("add to keep")}
                                onPlus={() => console.log('click on plus')}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default App;
