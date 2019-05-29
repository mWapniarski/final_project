import React, {Component} from "react";
import MarketOverview from "./MarketOverview";
import Header from "./Header";
import CurrentPrice from "./CurrentPrice";
import Trade from "./Trade";
import Options from "./Options";


class App extends Component {
    state = {
        btcPrice: 0,
        amountPLN: 0,
        amountBTC: 0
    }

    setBuyPrice = (price) => {
        this.setState({
            btcPrice: price
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
            amountBTC: this.state.amountBTC + (this.state.amountPLN / this.state.btcPrice)
        })
    }

    render() {
        return (
            <div id="container">
                {/*<MarketOverview/>*/}
                <Header/>
                <CurrentPrice setBuyPrice={this.setBuyPrice}/>
                <Trade buyBTC={this.buyBTC}
                />
                <Options pln= {this.state.amountPLN}
                         btc= {this.state.amountBTC}
                         btcPrice = { this.state.btcPrice}
                         setAmountPLN = {this.setAmountPLN}

                />
            </div>
        )
    }
}

export default App;