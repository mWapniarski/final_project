import React, {Component} from "react";
import MarketOverview from "./MarketOverview";
import Header from "./Header";
import CurrentPrice from "./CurrentPrice";
import Trade from "./Trade";
import Options from "./Options";


class App extends Component {
    state = {
        buy: 0,
        sell: 0,
        amountPLN: 0,
        amountBTC: 0
    }

    setBuyPrice = (price) => {
        this.setState({
            buy: price
        })
    }

    setSellPrice = (price) => {
        this.setState({
            sell: price
        })
    }


    setAmountPLN = (price) => {
        this.setState({
            amountPLN: price
        })
    }

    buyBTC = () => {
        this.setState({
            amountPLN: 0,
            amountBTC: this.state.amountBTC + (this.state.amountPLN / this.state.sell)
        })
    }

    sellBTC = () => {
        this.setState({
            amountBTC: 0,
            amountPLN: this.state.amountPLN + (this.state.amountBTC * this.state.buy)
        })
    }

    render() {
        return (
            <div id="container">
                {/*<MarketOverview/>*/}
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
            </div>
        )
    }
}

export default App;