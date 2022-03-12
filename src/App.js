import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>

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
                <Card/>

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
