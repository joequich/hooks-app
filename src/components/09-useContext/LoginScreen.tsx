import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={() => setUser(
                    {
                        id: 1234567, 
                        name: 'Joseph', 
                        email: 'dukzer@hotmail.com'
                    }
                )}
            >Login</button>
        </div>
    )
}
