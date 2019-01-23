import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Timer from "./components/Timer";
import Calendar from "./components/Calendar";
import Logo from "./logo.png";
import Backgorund from"./background.jpg";
import "./index.css";



var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<h1 className="title">meditate</h1>
		<img className="logo" src={Logo} width="100" height="100"	 />
		<div className="card text-center timer-content">
	        <div className="card-body">
	          <Timer />
	        </div>
	    </div>
	     <div className="card text-center">
	     	<div className="card-body">
	     		<h1 className="journal">Journal</h1>
	     		<h4>Double click on a date to access the journal.</h4>
	     		<main>
	     			<Calendar />
	     		</main>
	     	</div>
	     </div>
	</div>,
	destination
	);