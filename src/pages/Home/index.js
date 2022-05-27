import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext"
import ListOfProducts from "../../components/ListOfProducts";

export default function Home() {
    const { currentUser } = useAuth();    

    return (
        <>
            <Header />
            <p>{currentUser.uid}</p>
            <ListOfProducts />
        </>
    )
}