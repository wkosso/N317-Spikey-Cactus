import navStyles from './nav.module.css'
export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <a href="/">Home</a>
            <a href="/about">About Cactus Wildlife</a>
            <a href="/explore">Cactus Explore</a>
        </nav>
    );
}
