import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-S">Loading...</div>
                )}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root;