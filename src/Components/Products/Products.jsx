import s from "./Products.module.css"
import criolla from "../../img/criolla.jpg"
import pollo from "../../img/empanadas.jpg"

export default function Products() {
    return (
        <div className={s.fondoProducts}>
            <div className={s.divTituloProducts}>
                <h1 class="animate__animated animate__fadeIn">Nuestros productos</h1>
            </div> 
            <div className={s.divCriolla}>
                <img src={criolla} alt="Criolla"/>
                <h1>Empanada Criolla</h1>
                <p>Carne de primera calidad condimentada con especias varias, 
                    envuelta en una masa casera y finalmente cocida en aceite y grasa 
                    lo que da un toque de sabor tradicional como el nombre mismo. 
                </p>
            </div>

            <div className={s.divPollo}>
                <img src={pollo} alt="Pollo"/>
                <h1>Empanada de Pollo</h1>
                <p>Pollo fresco y desmenuzado a mano, marinado en condimentos 
                    que le aportan un sabor muy característico, masa casera y cocción en frito
                    acaban por dejar esta empanada como la preferida de muchos.</p>
            </div>
        </div>
    )
}