import { useAuth } from "../../context/AuthContext";
import { Redirect, Route } from "wouter";

export const PrivateRoute = ({ component }) => {

    const { currentUser } = useAuth()

    if (!currentUser) {
        return <Redirect to="/inicio" />
    }
    
    return (
        <Route
            component={component}
        />
    )
}