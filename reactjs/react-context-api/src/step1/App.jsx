import React, { Component } from 'react'
import BasicNav from './basic_nav'
import Showcase from './showcase'

class App extends Component {
	state = {
		user: {
			name: "MH Shuvo",
			email: "mhs@gmail.com",
			languages: [
				"html",
				"css",
				"javascript",
				"reactjs",
				"nodejs",
				"mongodb"
			]
		},
		isAuthenticate: true
	}

	login = () => {
		this.setState({ isAuthenticate: true })
	}

	logout = () => {
		this.setState({ isAuthenticate: false })
	}

	addToShowcase = item => {
		const user = { ...this.state.user }
		user.languages.push(item)
		this.setState({ user })
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<h1 className='my-2'>React Context Api</h1>
						<hr />
						<BasicNav
							isAuthenticate={this.state.isAuthenticate}
							user={this.state.user}
							login={this.login}
							logout={this.logout} />
						<hr />
						{this.state.isAuthenticate && (
							<Showcase
								user={this.state.user}
								addToShowcase={this.addToShowcase}
							/>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default App