import React, { Component } from 'react'
import BasicNav from './basic_nav'
import Showcase from './showcase'
import Context from './userContext'

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
			<Context.Provider
				value={{
					...this.state,
					login: this.login,
					logout: this.logout,
					addToShowcase: this.addToShowcase
				}}>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<h1 className='my-2'>React Context Api</h1>
							<hr />
							<BasicNav />
							<hr />
							{this.state.isAuthenticate && (
								<Showcase />
							)}
						</div>
					</div>
				</div>
			</Context.Provider>
		)
	}
}

export default App
