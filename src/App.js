import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";




function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, seIsLoading] = React.useState(true);


    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://623475ebdebd056201e599c9.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://623475ebdebd056201e599c9.mockapi.io/Favorites');
            const itemsResponse = await axios.get('https://623475ebdebd056201e599c9.mockapi.io/items');

            seIsLoading (false);

            setFavorites(favoritesResponse.data);
            setCartItems(cartResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);


    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) == Number(obj.id))) {
                setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)));
                axios.delete(`https://623475ebdebd056201e599c9.mockapi.io/cart/${obj.id}`);
            } else {
                axios.post('https://623475ebdebd056201e599c9.mockapi.io/cart', obj);
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Failed to add to basket')
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://623475ebdebd056201e599c9.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id ));
    }

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => Number(favObj.id) == Number(obj.id))) {
                axios.delete(`https://623475ebdebd056201e599c9.mockapi.io/Favorites/${obj.id}`);
                setFavorites(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://623475ebdebd056201e599c9.mockapi.io/Favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Failed to add to favorites')
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) == Number(id));
    }


    return (
        <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }}>
            <div className="wrapper clear">
                {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
                <Header
                    onClickCart={() => setCartOpened(true)}
                />
                <Routes>
                    <Route path="/" exact element={
                        <Home
                            items={items}
                            cartItems={cartItems}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            isLoading={isLoading}
                        />
                    }/>
                    <Route path="/favorites" exact element={
                        <Favorites/>
                    }/>
                </Routes>

            </div>
        </AppContext.Provider>
    );
}

export default App;
