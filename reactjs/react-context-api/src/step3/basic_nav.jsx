import React from 'react'
import { UserConsumer } from './userContext'

const LoggedInNav = () => {
    return (
        <UserConsumer>
            {({ user, logout }) => (
                <div>
                    <p>Hello {user.name}, You are LoggedIn with {user.email} </p>
                    <ul>
                        <li style={{cursor: 'pointer'}}>Dashbord</li>
                        <li style={{cursor: 'pointer'}} onClick={logout}>logout</li>
                    </ul>
                </div>
            )}
        </UserConsumer>
    )
}

const LoggedOutNav = () => {
    return (
        <UserConsumer>
            {({ login }) => (
                <>
                    <div>
                        <p>Plz click the login button</p>
                        <ul>
                            <li style={{cursor: 'pointer'}}>Register</li>
                            <li style={{cursor: 'pointer'}} onClick={login}>Login</li>
                        </ul>
                    </div>
                </>
            )}
        </UserConsumer>
    )
}

// Main Nav
const BasicNav = () => {
    return (
        <UserConsumer>
            {({ isAuthenticate }) => (
                <>
                    {isAuthenticate && <LoggedInNav />}
                    {!isAuthenticate && <LoggedOutNav />}
                </>
            )}
        </UserConsumer>
    )
}

export default BasicNav