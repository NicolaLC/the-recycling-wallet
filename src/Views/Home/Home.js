import './Home.css';
import Button from "../../Components/Button/Button";
import ArticlesGrid from "../../Components/ArticlesGrid/ArticlesGrid";

import articles from '../../FakeData/Articles.json';

function Home() {

    const renderArticles = () => {
        let result = [];
        let alternate = false;

        const chunkSize = 3;
        for (let i = 0; i < articles.length; i += chunkSize) {
            const chunk = articles.slice(i, i + chunkSize);
            result.push(<ArticlesGrid key={"articles-starts-from-" + i} alternate={alternate} articles={chunk}></ArticlesGrid>);
            alternate = !alternate;
        }

        return result;
    }

    return (
        <main className="app-home">
            <section className="app-home-hero-header">
                <h2>Recycle <em>more</em>, consume <em>less</em>.</h2>
                <span>Everyone knows that <em>recycling is important</em> for the environment.<br></br>
                    But did you know that <em>it can also save you money?</em></span>
                <Button>Anything to <b>share?</b></Button>
            </section>

            <section className="app-home-body">
                <h3>Latest articles</h3>
                {renderArticles()}
                <Button>Load <b>more</b> articles</Button>
            </section>
        </main>
    );
}

export default Home;
