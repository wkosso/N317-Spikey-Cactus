import Link from 'next/link';

export default function PostsList() {
    return (
        <div>
            <h2>Our Posts</h2>
            <ul>
                <li>
                    <Link href="/posts/hiking">Hiking Trails</Link>
                </li>
                <li>
                    <Link href="/posts/wildlife">Wildlife Spotting</Link>
                </li>
                <li>
                    <Link href="/posts/tours">Guided Tours</Link>
                </li>
            </ul>
        </div>
    );
}
