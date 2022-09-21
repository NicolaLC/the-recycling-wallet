import './ArticlesGrid.css';
import ArticlesGridItem from "../ArticlesGridItem/ArticlesGridItem";

function ArticlesGrid({articles, alternate}) {

    const renderArticleItems = () => {
        let result = [];
        articles.map((article) => {
            result.push(<ArticlesGridItem key={article.id} article={article}></ArticlesGridItem>);
        });
        return result;
    }

    return (
        <div className={"app-articles-grid" + (alternate ? " alternate" : "")}>
            {renderArticleItems()}
        </div>
    );
}

export default ArticlesGrid;
