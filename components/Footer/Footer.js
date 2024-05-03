import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

    
    <div>
        ${Button("/icons/whatsapp.png", "WhatsApp")}
        ${Button("/icons/github.png", "GitHub")}
        ${Button("/icons/linkedin.png", "LinkedIn")}
        ${Button("/icons/telegram.png", "Telegram")}
    </div>
`;