import './Button.css';

function Button(props) {
    return (
        <button className="app-button">
            <span>{props.children}</span>
        </button>
    );
}

export default Button;
