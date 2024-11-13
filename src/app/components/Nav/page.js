import Link from 'next/link';
import navStyles from './nav.module.css'
export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <Link href="">Home</Link>
            <Link href="/about">About Cactus Wildlife</Link>
            <Link href="/explore">Cactus Explore</Link>
        </nav>
    );
}
