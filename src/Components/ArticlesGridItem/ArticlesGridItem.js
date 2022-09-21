import './ArticlesGridItem.css';
import {Interweave} from "interweave";

function ArticlesGridItem({article}) {
    return (
        <a className={"app-articles-grid-item" + (article.main ? " main" : "")} title={"Click to open."}>
            <img src={article.image} alt={article.id}/>
            <p className={"tag"}>#{article.category}</p>
            <div className={"title"}>
                <Interweave content={article.title}></Interweave>
            </div>
            <div className={"footer"}>
                <span>By <em>{article.author}</em></span>
                <span><b>{article.date}</b></span>
            </div>
        </a>
    );
}

export default ArticlesGridItem;
