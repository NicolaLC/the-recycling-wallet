import './Footer.css';

function Footer() {
    return (
        <footer className={"app-footer"}>
            <div className={"app-footer-top"}>
                <div>
                    <h4>About TRW</h4>
                    <ul>
                        <li><a href={"#"}>Why</a></li>
                        <li><a href={"#"}>Who</a></li>
                        <li><a href={"#"}>Where</a></li>
                        <li><a href={"#"}>Why the website is dark?</a></li>
                    </ul>
                </div>
                <div>
                    <h4>How can I help?</h4>
                    <ul>
                        <li><a href={"#"}>Write an article.</a></li>
                        <li><a href={"#"}>Translate an article.</a></li>
                        <li><a href={"#"}>Give feedbacks.</a></li>
                        <li><a href={"#"}>Is there an error somewhere?</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Our socials.</h4>
                    <ul>
                        <li><a href={"#"}>Twitter.</a></li>
                        <li><a href={"#"}>Facebook.</a></li>
                        <li><a href={"#"}>Instagram.</a></li>
                        <li><a href={"#"}>LinkedIn.</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
