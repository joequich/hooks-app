import React from 'react'
import { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

import { IUserStateContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState<IUserStateContext|{}>({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
