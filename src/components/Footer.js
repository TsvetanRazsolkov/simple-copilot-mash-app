const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </footer>
    );
};

export default Footer;