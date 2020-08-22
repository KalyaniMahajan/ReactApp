import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Auth extends Component {
	constructor() {
		super()
		this.state = {
			isRegister : false
		}
	}
	login() {
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
				console.log(resp.token)
				localStorage.setItem("auth", JSON.stringify(resp.token))
			})
		});
	} 

	register() {
		console.warn("state", this.state)
		fetch('http://localhost:8000/api/register', {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state)
		}).then((result) => {
			result.json().then((resp) => {
			})
		});
	}

	render() {
		var auth = JSON.parse(localStorage.getItem('auth'))
		return (
			<div>
				{
					auth ? <Redirect to="home" /> : null
				}
				{
					!this.state.isRegister ?
						<div>
							<input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} /><br /><br />
							<input type="text" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} /><br /><br />
							<button onClick={() => this.login()}>Login</button>
							<button onClick={() => this.setState({ isRegister: true })}>go to Register</button>
						</div>
						:
						<div>
							<input type="text" placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} /><br /><br />
							<input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} /><br /><br />
							<input type="text" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} /><br /><br />
							<button onClick={() => this.register()}>Register</button>
							<button onClick={() => this.setState({ isRegister: false })}>go to Login</button>
						</div>
				}
			</div>
		);
	}
}

export default Auth;
