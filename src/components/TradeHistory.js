import React, {Component} from "react";

class TradeHistory extends Component {

    state = {
        amountOnBuy: "",
        priceOnBuy: "",
        amountOnSell: "",
        priceOnSell: "",
        allBuy: [],
        allSell: []
    }

    componentDidMount() {

        fetch("http://localhost:3000/buy")
            .then(resp => resp.json())
            .then(el => {
                    this.setState({
                        allBuy: el
                    })
            })

        fetch("http://localhost:3000/sell")
            .then(resp => resp.json())
            .then(el => {
                this.setState({
                    allSell: el
                })
            })
    }


    render() {

        return (
            <>
                <div id="tradeHistory" className="main_width">
                    <div>Your 3 last trades:</div>
                    <ul className="buyList">
                        {this.state.allBuy.slice(this.state.allBuy.length-3)
                            .map(item => <li>{ `Bought: ${parseFloat(item.btcOnBuy)
                                .toFixed(8)} BTC for ${parseFloat(item.plnOnBuy)
                                .toFixed(2)} PLN `}</li>)}
                    </ul>

                    <ul className="sellList">
                        {this.state.allSell.slice(this.state.allSell.length-3)
                            .map(item => <li>{ `Sold: ${parseFloat(item.btcOnSell)
                                .toFixed(8)} BTC for ${parseFloat(item.plnOnSell)
                                .toFixed(2)} PLN`}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default TradeHistory;