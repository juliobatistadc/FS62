import { NavLink } from "react-router"

function Header(){
    return(
        <>
            <header>HEADER</header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="cadastrar">Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="product-description/8">Categorias</NavLink>
                    </li>
                    <li>
                        <NavLink to="teste">teste</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header