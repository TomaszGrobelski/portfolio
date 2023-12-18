import { Icon } from "@iconify/react";
import { useRef } from "react";

function Contact() {
    const phoneNumberRef = useRef(null);

    const handleCopyClick = async () => {
        try {
            const phoneNumber = phoneNumberRef.current.innerText;
            await navigator.clipboard.writeText(phoneNumber);
            console.log("Tekst skopiowany do schowka:", phoneNumber);
        } catch (err) {
            console.error("Błąd podczas kopiowania do schowka:", err);
        }
    };
    return (
        <section className=" mt-60">
            <div>
                <h2>Contact</h2>

                <p className="flex items-center">
                    <Icon icon="ion:mail" width="50" height="50" />
                    <span>tomasz.grobelski98@gmail.com</span>
                </p>
                <button onClick={handleCopyClick} className="flex items-center">
                    <Icon icon="gridicons:phone" width="50" height="50" />
                    <span ref={phoneNumberRef}>795003227</span>
                </button>
            </div>
            <div>
                <p>TOMASZ GROBELSKI © 2023 WSZELKIE PRAWA ZASTRZEŻONE</p>
            </div>
        </section>
    );
}

export default Contact;
