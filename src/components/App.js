import React, {Component} from "react";
import Public_API from "./Public_API";
import Header from "./Header";
import Trade from "./Trade";

const App = () => {
    return (
        <div id="container">
            <Header />
            <Public_API />
            <Trade />
        </div>
    )
}

export default App;