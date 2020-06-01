import React from 'react';
import ReactDOM from 'react-dom';

function Cartoon(props){
	return <h1>Hello, {props.name} on {props.show}</h1>
}

function Show(){
	return <div>
				<Cartoon name="Anna" show="Frozzen 1"/>
				<Cartoon name="Elsa" show="Frozzen 2"/>
		   </div>
}
setInterval(function(){
	ReactDOM.render(
		<Show/>,
	  document.getElementById('root')
	);	
}, 1200);

