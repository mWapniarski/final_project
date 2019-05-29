import React, {Component} from "react";

class CurrentPrice extends Component {

    state = {
        sell: null,
        buy: null,
    }

    getSellPrice = () => {
        fetch('https://bitbay.net/API/Public/BTCPLN/orderbook.json')
            .then( resp => resp.json() )
            .then( resp => {
                this.setState({
                    sell: resp.asks
                })
            });
    }

    getBuyPrice = () => {
        fetch('https://bitbay.net/API/Public/BTCPLN/orderbook.json')
            .then( resp => resp.json() )
            .then( resp => {
                console.log(resp)
                this.props.setBuyPrice(resp.bids[0][0])
                this.setState({
                    buy: resp.bids
                })
            });
    }

    componentDidMount() {
        const refreshTime = 10 * 1000;

        this.getSellPrice ();
        this.getBuyPrice ();

        setInterval( () => {
            this.getSellPrice()
        }, refreshTime);

        setInterval( () => {
            this.getBuyPrice()
        }, refreshTime);
    }


    render() {

        if (this.state.buy && this.state.sell == null) {
            return null;
        }

        const sellPrice = parseInt(this.state.buy).toFixed(0);
        const buyPrice = parseInt(this.state.sell).toFixed(0);

        return (
            <>
                <div id="price">
                    <div id="btc-buy-price" className="main_width">
                        Buy price:<br/>
                        {buyPrice} PLN
                    </div>
                    <div id="btc-sell-price" className="main_width">
                        Sell price:<br/>
                        {sellPrice} PLN
                    </div>
                </div>
            </>
        )
    }
}

export default CurrentPrice;