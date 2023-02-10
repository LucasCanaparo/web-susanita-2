import s from "./Contact.module.css"
import contactateLogo from "../../img/contactateLogo.png"
import { Toaster, toast } from 'react-hot-toast'
import { useState } from "react";

export default function Contact() {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal);
        toast.success('Message sent!')
    };

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
                    <button 
                    onClick={showModal}
                    type="submit">
                    Enviar</button>
                </form>
                <Toaster
                position="top-center"
            />
            </div>
        </div>
    )
}