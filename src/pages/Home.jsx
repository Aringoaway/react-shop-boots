import Card from "../components/Card";
import React from "react";

function Home({
                  items,
                  cartItems,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCart,
                  isLoading
    }) {

    const renderItems = () => {
        const filtredItems = items.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                added = {cartItems.some(obj => Number(obj.id) == Number(item.id))}
                loading={isLoading}
                {...item}
            />
        ));
    }
    return(
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
                { renderItems() }

            </div>
        </div>
    );
}

export default Home;