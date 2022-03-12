

function App() {
  return (
    <div className="wrapper clear">
        <div className="overlay">
            <div className="drawerBlock">
                <h2>Košík</h2>
                <div className="cartItem">
                    <img src="/img/sneakers/1.jpg" alt="Sneakers"/>
                    <div>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 Kč</b>
                    </div>
                    <img src="/img/btn-remove.svg" alt="Remove"/>
                </div>
            </div>
        </div>

        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png"/>
                <div>
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Shop the best sneakers</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg"/>
                    <span>1205 Kč</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg"/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Search..." type="text"/>
                </div>
            </div>


            <div className="d-flex">
            {/*first card*/}

                <div className="card">
                    <div className="favorite">
                        <img src="/img/heart-unliked.svg" alt="Unliked"/>
                    </div>

                    <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
                    <p>Nike Blazer Mid Suede Men's Sneakers</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Price:</span>
                            <b>12 999 Kč</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt=""/>
                        </button>
                    </div>
                </div>
                {/*first card end*/}
                {/*second card*/}

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt=""/>
                    <p>Nike Blazer Mid Suede Men's Sneakers</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Price:</span>
                            <b>12 999 Kč</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt=""/>
                        </button>
                    </div>
                </div>
                {/*second card end*/}
                {/*third card*/}

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt=""/>
                    <p>Nike Blazer Mid Suede Men's Sneakers</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Price:</span>
                            <b>12 999 Kč</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt=""/>
                        </button>
                    </div>
                </div>
                {/*third card end*/}
                {/*forth card*/}

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt=""/>
                    <p>Nike Blazer Mid Suede Men's Sneakers</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Price:</span>
                            <b>12 999 Kč</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt=""/>
                        </button>
                    </div>
                </div>
            {/*forth card end*/}
            </div>
        </div>
    </div>
  );
}

export default App;
