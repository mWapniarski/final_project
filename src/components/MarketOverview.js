import React, {Component} from "react";

const MarketOverview = () => {
    return (
        <div id="marketOverview">
            <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
        </div>
    )
}

export default MarketOverview;