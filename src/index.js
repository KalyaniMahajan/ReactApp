import React from 'react';
import ReactDOM from 'react-dom';

let name = <p>Harry Potter Clock</p>

setInterval(function(){
	ReactDOM.render(
		<h2>{name} The Current Time is - {new Date().toLocaleTimeString()}</h2>,
	  document.getElementById('root')
	);	
}, 1200);

