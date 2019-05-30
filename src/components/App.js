import React, {Component} from "react";
import MarketOverview from "./MarketOverview";
import Header from "./Header";
import CurrentPrice from "./CurrentPrice";
import Trade from "./Trade";
import Options from "./Options";
import Footer from "./Footer";


class App extends Component {
    state = {
        buy: 0,
        sell: 0,
        amountPLN: 0,
        amountBTC: 0
    };


    setBuyPrice = (price) => {
        this.setState({
            buy: price
        })
    };

    setSellPrice = (price) => {
        // const oldPrice = this.state.sell;
        this.setState({
            sell: price
        })
    };


    setAmountPLN = (price) => {
        this.setState({
            amountPLN: price
        })
    };

    buyBTC = () => {


        const price = this.state.sell;
        const btcOnBuy = (this.state.amountBTC + (this.state.amountPLN / this.state.sell));
        const plnOnBuy = (this.state.amountPLN + (this.state.amountBTC * this.state.sell));
        if (btcOnBuy!==0 && plnOnBuy!==0) {
            const sendData = {
                price: price,
                btcOnBuy: btcOnBuy,
                plnOnBuy: plnOnBuy
            };

            //amount

            fetch("http://localhost:3000/buy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(sendData)
            }).then(resp => resp.json())
                .then(() => {
                    this.setState({
                        amountPLN: 0,
                        amountBTC: btcOnBuy
                    })
                })
        }

    };

    sellBTC = () => {

        const price = this.state.buy;
        const plnOnSell = (this.state.amountPLN + (this.state.amountBTC * this.state.buy));
        const btcOnSell = (this.state.amountBTC + (this.state.amountPLN / this.state.buy));
        if (btcOnSell!==0 && plnOnSell!==0) {

            const sendData = {
                price: price,
                plnOnSell: plnOnSell,
                btcOnSell: btcOnSell

            };

            fetch("http://localhost:3000/sell", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(sendData)
            }).then(resp => resp.json())
                .then(() => {
                    this.setState({
                        amountBTC: 0,
                        amountPLN: plnOnSell
                    })
                })
        }
    };



    render() {


        return (
            <div id="container">
                <MarketOverview/>
                <Header/>
                <CurrentPrice setBuyPrice={this.setBuyPrice}
                              setSellPrice={this.setSellPrice}
                />
                <Trade buyBTC={this.buyBTC}
                       sellBTC={this.sellBTC}
                />
                <Options pln={this.state.amountPLN}
                         btc={this.state.amountBTC}
                         btcPrice={this.state.buy}
                         btcPrice2={this.state.sell}
                         setAmountPLN={this.setAmountPLN}
                />
                <Footer />
            </div>
        )
    }
}

export default App;