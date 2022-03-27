import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Index from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";
import Drawer from "./components/Drawer";




function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, seIsLoading] = React.useState(true);


    React.useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://623475ebdebd056201e599c9.mockapi.io/cart'),
                    axios.get('https://623475ebdebd056201e599c9.mockapi.io/Favorites'),
                    axios.get('https://623475ebdebd056201e599c9.mockapi.io/items')
                ]);
                seIsLoading (false);

                setFavorites(favoritesResponse.data);
                setCartItems(cartResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Error while requesting data :(')
                console.error(error);
            }
        }

        fetchData();
    }, []);


    const onAddToCart = async (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) == Number(obj.id))) {
                setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)));
                await axios.delete(`https://623475ebdebd056201e599c9.mockapi.io/cart/${obj.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                await axios.post('https://623475ebdebd056201e599c9.mockapi.io/cart', obj);
            }
        } catch (error) {
            alert('Failed to add to basket');
            console.error(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://623475ebdebd056201e599c9.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter(item => item.id !== id ));
        } catch (error) {
            alert('Failed to remove from basket');
            console.error(error);
        }
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
            alert('Failed to add to favorites');
            console.error(error);
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) == Number(id));
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            onAddToFavorite,
            onAddToCart,
            setCartOpened,
            setCartItems
        }}>
            <div className="wrapper clear">
                <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened}/>
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

                    <Route path="/orders" exact element={
                        <Orders/>
                    }/>
                </Routes>

            </div>
        </AppContext.Provider>
    );
}

export default App;
