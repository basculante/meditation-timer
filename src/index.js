import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer";
import Logo from "./logo.png";
import "./index.css";



var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<h1 className="title">meditate</h1>
		<img className="logo" src={Logo} width="100" height="100" alt="logo"/>
		<div className="card text-center timer-content">
	        <div className="card-body">
	          <Timer />
	        </div>
	    </div>
	</div>,
	destination
	);