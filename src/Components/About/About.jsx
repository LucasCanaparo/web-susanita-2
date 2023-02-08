import s from "./About.module.css"
import cocinera from "../../img/cocinera.png"
import lucasimg from "../../img/lucas.jpg"

export default function About() {
    return (
        <div className={s.fondoAbout}>
            <div className={s.divTituloAbout}>
                <h1>Llenando panzas desde 2020</h1>
            </div>
            <div className={s.divMonica}>
                <div className={s.divMonicaHijo}>
                    <img src={cocinera} alt="Cocinera" />
                    <h1>Monica Patricia Bigheli</h1>
                    <p>"Nació como un negocio de comida para unos pocos vecinos pero hoy en dia estoy orgullosa de haber llegado donde estoy"</p>
                </div>
            </div>
            <div className={s.divLucas}>
                <div className={s.divLucasHijo}>
                    <img src={lucasimg} alt="Lucas" />
                    <h1>Lucas Canaparo</h1>
                    <p>"Disfrute realizando esta paginda, a pesar de ser meramente publicitaria fue una gran experiencia"</p>
                </div>
            </div>
        </div>
    )
}