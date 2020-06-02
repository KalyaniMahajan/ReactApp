import React, { Component } from 'react';

class Auth extends Component {
    login(){
    	console.warn("state", this.state)
    	fetch('http://localhost:8000/api/login', {
    		method: "POST",
    		headers: {
    			"Accept": "application/json",
    			"Content-Type": "application/json"
    		},
    		body: JSON.stringify(this.state)
    	}).then((result) => {
    		result.json().then((resp) => {
    			console.log(resp.data.token)
    			localStorage.setItem("auth", JSON.stringify(resp.data.token))
    		})
    	});
    }

    render() {
        return (
            <div>
            	<div>
            		<input type="text" placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})} /><br /><br />
	            	<input type="text" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} /><br /><br />
	            	<button onClick={()=>this.login()}>Login</button>
            	</div>
            </div>
        );
    }
}

export default Auth;
