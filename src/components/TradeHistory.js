import React, {Component} from "react";

class TradeHistory extends Component {

    state = {
        history: "none yet"
    }


    render() {
        return (
            <div id="tradeHistory" className="main_width">
                Your 10 last trades: {this.state.history}
            </div>
        )
    }
}

export default TradeHistory;