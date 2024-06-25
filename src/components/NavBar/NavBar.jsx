import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    const array = ['Procesadores', 'Memorias', 'Discos']
    return (
        <header>
            <nav>
                <div>
                    <Link to='/'><img src="../../../public/images/Logo.png" width="50px" alt="" /></Link>
                    {
                        array.map((a) => (
                            <Link to={`/Category/${a}`} key={a}>{a}</Link>
                        ))
                    }
                    <Link to="/orders">Orders</Link>
                    <CartWidget className="cartwidget"/>
                </div>
            </nav>

        </header>
    )
}

export default NavBar