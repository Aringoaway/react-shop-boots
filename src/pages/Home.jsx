import Card from "../components/Card";
import React from "react";

function Home({items, searchValue,setSearchValue,onChangeSearchInput,onAddToFavorite,onAddToCart}) {
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
                {
                    items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default Home;