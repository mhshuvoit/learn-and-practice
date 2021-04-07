import React from 'react'
import Context from './userContext'

const LoggedInNav = () => {
    return (
        <Context.Consumer>
            {({ user, logout }) => (
                <div>
                    <p>Hello {user.name}, You are LoggedIn with {user.email} </p>
                    <ul>
                        <li style={{ cursor: 'pointer' }}>Dashbord</li>
                        <li style={{ cursor: 'pointer' }} onClick={logout}>logout</li>
                    </ul>
                </div>
            )}
        </Context.Consumer>
    )
}

const LoggedOutNav = () => {
    return (
        <Context.Consumer>
            {({ login }) => (
                <>
                    <div>
                        <p>Plz click the login button</p>
                        <ul>
                            <li style={{ cursor: 'pointer' }}>Resgister</li>
                            <li style={{ cursor: 'pointer' }} onClick={login}>Login</li>
                        </ul>
                    </div>
                </>
            )}
        </Context.Consumer>
    )
}

// Main Nav
const BasicNav = () => {
    return (
        <Context.Consumer>
            {({ isAuthenticate }) => (
                <>
                    {isAuthenticate && <LoggedInNav />}
                    {!isAuthenticate && <LoggedOutNav />}
                </>
            )}
        </Context.Consumer>
    )
}
export default BasicNav