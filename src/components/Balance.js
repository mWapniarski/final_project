import React, {Component} from "react";

class Balance extends Component {

    render() {

        return (
            <div id="balance" className="main_width">Balance:
                <div>
                    <div>{this.props.amountBTC.toFixed(8)} BTC</div>
                    <div>{this.props.amountPLN.toFixed(2)} PLN</div>
                </div>
            </div>
        )
    }
}

export default Balance;