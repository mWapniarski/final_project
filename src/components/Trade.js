import React, {Component} from "react";

class Trade extends Component {

    handleBuy = () => {
        this.props.buyBTC()
    }


    render() {

        return (
            <div id="trade" className="main_width">
                <div id="btn-left"
                     className="trade-button"
                     onClick={this.handleBuy}>BUY
                </div>
                <div id="btn-right"
                     className="trade-button">SELL
                </div>
            </div>
        )
    }
}

export default Trade;