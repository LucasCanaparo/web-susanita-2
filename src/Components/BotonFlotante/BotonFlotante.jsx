import s from './BotonFlotante.module.css'

export default function BotonFlotante() {
    return (
        <div className={s.container}>
            <input id="btn-mas" type="checkbox" className={s.inputBtnFlot}/>
            <div className={s.btn_mas}>
                <label for="btn-mas" className={s.labelMas}><i class="fa-solid fa-plus"></i></label>
            </div>
            <div className={s.redes}>
                <a target="_blank"  rel="noreferrer" href="https://github.com/LucasCanaparo" className={s.icon_github} ><i class="fa-brands fa-github"/></a>
                <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/lucas-canaparo/" className={s.icon_linkedin}><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    )
}