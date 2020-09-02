import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Auth extends Component {
	constructor() {
		super()
		this.state = {
			isRegister: false
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
				window.location.href = "http://localhost:3000/list";
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
					//auth ? <Redirect to="home" /> : null
				}
				{
					!this.state.isRegister ?
						<div className="container col-6">
							<div className="py-4">
								<h1 className="py-2">Login</h1>
								<div className="form-group">
									<label for="">UserName</label>
									<input type="text" className="form-control" placeholder="Username" onChange={(e) => this.setState({ email: e.target.value })} />
								</div>

								<div className="form-group">
									<label for="">Password</label>
									<input type="text" className="form-control" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
								</div>

								<button onClick={() => this.login()} type="button" className="btn btn-success mr-2">Submit</button>
								<button className="btn btn-primary" onClick={() => this.setState({ isRegister: true })}>go to Register</button>
							</div>
						</div>
						:
						<div className="container col-6">
							<div className="py-4">
								<h1>Register</h1>
								<div className="form-group">
									<label for="">Name</label>
									<input type="text" className="form-control" placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} />
									<small id="title" className="form-text text-muted"></small>
								</div>

								<div className="form-group">
									<label for="">UserName</label>
									<input type="text" className="form-control" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
									<small id="title" className="form-text text-muted"></small>
								</div>

								<div className="form-group">
									<label for="">Password</label>
									<input type="text" className="form-control" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
									<small id="desc" className="form-text text-muted"></small>
								</div>

								<button onClick={() => this.register()} type="button" className="btn btn-success mr-2">Submit</button>
								<button className="btn btn-primary" onClick={() => this.setState({ isRegister: false })}>go to Login</button>
							</div>
						</div>
				}
			</div>
		);
	}
}

export default Auth;
