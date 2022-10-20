
import { AuthProvider } from './auth'
import { Router } from './router/Router'


export const HeroesApp = () => {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
}
