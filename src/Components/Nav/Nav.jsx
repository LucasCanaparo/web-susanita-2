import s from "./Nav.module.css"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className={s.fondoNav}>
            <div className={s.divTitulo}>
                <h1>Las Empanadas de Susanita</h1>
            </div>
            <div className={s.listaNav}>
                <ul>
                    <li>
                        <Link to="/">
						    <a href="/#">
							    Inicio
						    </a>
					    </Link>
                    </li>
                    <li>
                        <Link to="/allProducts">
						    <a href="/#">
                                Productos
						    </a>
					    </Link>
                    </li>
                    <li>
                        <Link to="/about">
						    <a href="/#">
							    Nosotros
						    </a>
					    </Link>
                    </li>
                    <li>
                        <Link to="/contact">
						    <a href="/#">
							    Deja tu opinión
						    </a>
					    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}