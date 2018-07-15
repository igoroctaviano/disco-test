import React from "react";
import ReactDOM from "react-dom";

/* Style */
import "./assets/css/index.less";

/* Components */
import SearchContainer from "./components/container/SearchContainer.js";

ReactDOM.render(<SearchContainer />, document.getElementById("app"));

module.hot.accept();
