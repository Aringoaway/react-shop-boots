import React from "react";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://623475ebdebd056201e599c9.mockapi.io/items').then(res => {
            return res.json();
        }).then(json => {
            setItems(json)
        });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header
                onClickCart={() => setCartOpened(true)}
            />

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Search results: "${searchValue}"` : 'All sneakers'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." type="text"/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {/*Render Items*/}
                    {
                        items.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorit={() => console.log("add to keep")}
                                onPlus={(obj) => onAddToCart(item)}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default App;
