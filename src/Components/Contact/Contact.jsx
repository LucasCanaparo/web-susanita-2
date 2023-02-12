import s from "./Contact.module.css"
import contactateLogo from "../../img/contactateLogo.png"

export default function Contact() {
    return (
        <div className={s.fondoContact}>
            <div className={s.divContact}>
                <img src={contactateLogo} alt="contactateLogo" />
                <form>
                    <div>
                        <input 
                        required={true}
                        type="text"
                        name="email"
                        placeholder="Tu Email"/>
                    </div>
                    <div>
                        <input 
                        required={true}
                        type="text"
                        name="name"
                        placeholder="Tu nombre"/>
                    </div>
                    <div>
                        <textarea
                        required={true} 
                        type="text"
                        name="message"
                        placeholder="Tu mensaje"
                        />
                    </div>
                    <button 
                    type="submit">
                    Enviar</button>
                </form>
            </div>
        </div>
    )
}