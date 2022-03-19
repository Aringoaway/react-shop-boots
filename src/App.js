import React from "react";
import axios from "axios";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorits, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://623475ebdebd056201e599c9.mockapi.io/items').then(res => {
            setItems(res.data);
        });
        axios.get('https://623475ebdebd056201e599c9.mockapi.io/cart').then(res => {
            setCartItems(res.data);
        });

    }, []);


    const onAddToCart = (obj) => {
        axios.post('https://623475ebdebd056201e599c9.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://623475ebdebd056201e599c9.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id ));
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://623475ebdebd056201e599c9.mockapi.io/favotites', obj);
        setFavorites((prev) => [...prev, obj]);
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }


    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header
                onClickCart={() => setCartOpened(true)}
            />

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Search results: "${searchValue}"` : 'All sneakers'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        {searchValue && <img
                            onClick={() => setSearchValue('')}
                            className="clear removeBtn cu-p"
                            src="/img/btn-remove.svg"
                            alt="Clear"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." type="text"/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {/*Render Items*/}
                    {
                        items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorit={(obj) => onAddToFavorite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default App;
