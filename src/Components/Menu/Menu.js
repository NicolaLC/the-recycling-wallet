import './Menu.css';

function Menu() {
    return (
        <div className="app-menu">
            <ul>
                <li className="app-menu-item active">Home</li>
                <li className="app-menu-item">Search</li>
                <li className="app-menu-item">Latest News</li>
                <li className="app-menu-item">Suggest a Tip</li>
            </ul>
        </div>
    );
}

export default Menu;
