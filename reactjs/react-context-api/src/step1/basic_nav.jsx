import React from 'react'

const LoggedInNav = ({ logout, user }) => {
    return (
        <div>
            <p>Hello {user.name}, Your are loggedin with {user.email} </p>
            <ul>
                <li style={{ cursor: 'pointer' }}>Dashbord</li>
                <li style={{ cursor: 'pointer' }} onClick={logout}>logout</li>
            </ul>
        </div>
    )
}

const LoggedOutNav = ({ login }) => {
    return (
        <div>
            <p>Plz click the login button</p>
            <ul>
                <li style={{ cursor: 'pointer' }}>Resgister</li>
                <li style={{ cursor: 'pointer' }} onClick={login}>Login</li>
            </ul>
        </div>
    )
}

// Main Nav
const BasicNav = ({ login, logout, isAuthenticate, user }) => {
    if (isAuthenticate) {
        return <LoggedInNav logout={logout} user={user} />
    }
    return <LoggedOutNav login={login} />
}

export default BasicNav