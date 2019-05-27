import React, {Component} from "react";
import Public_API from "./Public_API";

const App = () => {
    return (
        <div className="main_width">
            <div id="header">CryptoCurrency Trading Bot</div>
            <div className="btc-price">
                <div>Current price of BTC is: </div>
            </div>
            <Public_API />

        </div>
    )
}

export default App;