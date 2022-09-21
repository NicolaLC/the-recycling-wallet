import './Logo.css';
import logo from '../../logo.svg';

function Logo() {
    return (
        <div className="app-logo">
            <img src={logo} alt="The Recycling Wallet Menu" />
            <h1>THE RECYCLING WALLET</h1>
        </div>
    );
}

export default Logo;
