import React from 'react'
import BasicNav from './basic_nav'
import Showcase from './showcase'
import { UserProvider, UserConsumer } from './userContext'

const App = () => {
	return (
		<UserProvider>
			<div className='container'>
				<div className='row'>
					<UserConsumer>
						{({ isAuthenticate }) => (
							<div className='col-sm-12'>
								<h1 className='my-2'>React Context Api</h1>
								<hr />
								<BasicNav />
								<hr />
								{isAuthenticate && <Showcase />
								}
							</div>
						)}
					</UserConsumer>
				</div>
			</div>
		</UserProvider>
	)
}

export default App