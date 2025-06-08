import { useEffect, useState } from "react";

export default function FloatingMessage({ msg, setMsg, duration = 3000 }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (msg) {
            setVisible(true);
            const timer = setTimeout(() => {
                if (typeof msg === 'string' && msg.includes("sent")) {
                    window.location.reload();
                }
                setVisible(false);
                setMsg(null);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [msg, setMsg, duration]);

    if (!visible || !msg) return null;

    return (
        <div className="floating-message-overlay">
            <div className="floating-message-box">
                <div className="floating-message-text">{msg}</div>
            </div>
        </div>
    );
}
