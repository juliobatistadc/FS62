import { useSearchParams } from "react-router"
import ProductSection from "../components/ProductSection"
import Slide from "../components/Slide"

function Home() {
    const [parametros] = useSearchParams()
    console.log(parametros.get("page"))
    console.log(parametros.get("qtd"))
    return (
        <>
            <ProductSection />
            <Slide />
        </>
    )
}

export default Home