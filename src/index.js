import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Home />
	</BrowserRouter>
);
