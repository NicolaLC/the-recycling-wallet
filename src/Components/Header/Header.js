import './Header.css';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import {useEffect, useState} from "react";

function Header() {
    const [scrollAmount, setScrollAmount] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => setScrollAmount(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={"app-header" + (scrollAmount > 25 ? " scroll-exceeded" : "")}>
            <Logo />
            <Menu />
        </header>
    );
}

export default Header;
