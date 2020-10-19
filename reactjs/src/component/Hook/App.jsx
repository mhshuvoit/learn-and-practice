import React from 'react'
import '../../App.css'
import Hook from './CrushCourseHooks'

const App = () => {
	return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 sm-offset-3'>
						<h1 className='my-2'>Hooks</h1>
						<hr />
						<Hook />
					</div>
				</div>
			</div>
	)
}

export default App