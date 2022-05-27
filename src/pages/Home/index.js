import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext"

export default function Home() {
    const { currentUser } = useAuth();    

    return (
        <>
            <Header />
            {currentUser
                ?  <>
                    <h1>{currentUser.uid}</h1>
                </>
                : <h1>No estas logueado</h1>
            }
        </>
    )
}