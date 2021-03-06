import React, {Component} from "react";

class Trade extends Component {


    state = {
        price: "",
    }

    handleBuy = () => {
        this.props.buyBTC()
    }

    handleSell = () => {
        this.props.sellBTC()
    }

    render() {

        return (
            <div id="trade" className="main_width">
                <div id="btn-left"
                     className="trade-button"
                     onClick={this.handleBuy}>BUY
                </div>
                <div id="btn-right"
                     className="trade-button"
                     onClick={this.handleSell}>SELL
                </div>
            </div>
        )
    }
}

export default Trade;