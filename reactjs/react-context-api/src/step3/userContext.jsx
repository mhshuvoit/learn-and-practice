import React, { createContext, Component } from 'react'
let Context = null
const { Provider, Consumer } = Context = createContext()

class UserProvider extends Component {
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
			<Provider
				value={{
					...this.state,
					login: this.login,
					logout: this.logout,
					addToShowcase: this.addToShowcase
				}}>
				{this.props.children}
			</Provider>
		)
	}
}

export { UserProvider, Consumer as UserConsumer, Context as UserContext }