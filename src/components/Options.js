import React, {Component} from "react";
import Balance from "./Balance";
import TradeHistory from "./TradeHistory";

class Options extends Component {


    state = {
        show: "Balance",

    }

    handleBalance = () => {
        this.setState({
            show: "Balance"
        })
    }

    handleTradeHistory = () => {
        this.setState({
            show: "TradeHistory"
        })
    }

    handleDep = () => {
        this.props.setAmountPLN(parseInt(prompt("How much do You want to deposit?")))
    }

    render() {

        let show;
        const {pln, btc} = this.props;
        if (this.state.show === "Balance") {
            show = <Balance
                amountPLN={pln}
                amountBTC={btc}

            />
        } else if (this.state.show === "TradeHistory") {
            show = <TradeHistory/>

        }
        return (

            <>
                <div>{show}</div>
                <div id="wallet" className="main_width">
                    <div className="wallet-row">
                        <div className="wallet-button"
                             onClick={this.handleBalance}>Balance
                        </div>
                        <div className="wallet-button"
                             onClick={this.handleTradeHistory}>Trade History
                        </div>
                    </div>
                    <div className="wallet-row">
                        <div className="wallet-button"
                             onClick={this.handleDep}>Deposit
                        </div>
                        <div className="wallet-button">Withdraw
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Options;