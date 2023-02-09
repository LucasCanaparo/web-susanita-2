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
                        name="Email"
                        placeholder="Tu Email"/>
                    </div>
                    <div>
                        <input 
                        required={true}
                        type="text"
                        name="Name"
                        placeholder="Tu nombre"/>
                    </div>
                    <div>
                        <textarea
                        required={true} 
                        type="text"
                        name="Message"
                        placeholder="Tu mensaje"
                        />
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}