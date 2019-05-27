import React, {Component} from "react";

class Public_API extends Component {

    state = {
        param: null,
    }

    componentDidMount() {

        fetch('https://www.bitmarket.pl/json/BTCPLN/ticker.json')
            .then( resp => resp.json() )
            .then( resp => {
                this.setState({
                    param: resp.last
                })
            });
    }


    render() {

        const lastPrice = this.state.param;

        return (
            <div id="btc-price" className="main_width">
                Current price: {lastPrice} PLN</div>
        )
    }
}

export default Public_API;