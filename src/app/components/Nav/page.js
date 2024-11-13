import navStyles from './nav.module.css'
export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/explore">Explore</a>
        </nav>
    );
}
