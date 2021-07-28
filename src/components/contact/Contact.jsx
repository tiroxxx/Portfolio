import { useState } from "react"
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)

    function handleSubmit(e) {
        setMessage(true)
        setTimeout(() => {
            setMessage(false)
        }, 2000)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form  action="https://formsubmit.co/christianmarquez41@gmail.com" method="POST" onSubmit={handleSubmit}>
                    <input name="email" type="text" placeholder="Email" required/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP!</span>}
                </form>
            </div>
        </div>
    )
}
