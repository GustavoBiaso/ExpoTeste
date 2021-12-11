import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginRoutes from './login.routes'
import { useAuth } from '../hook/auth'
import HomeStack from "./home.routes"

export default function Routes() {
    const { access_token } = useAuth();
    return (
        <NavigationContainer>
            {access_token ? <HomeStack /> : <LoginRoutes />}
        </NavigationContainer>
    )
}