import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Main from "../components/Main.jsx"

function Layout(){
    return(
        <>
        <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
            <Header />
            <Main />
            <Footer />
        </div>
        </>
    )
}

export default Layout