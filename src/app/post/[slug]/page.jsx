
'use client';

import { useRouter } from 'next/router';

export default function PostPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <div>Loading...</div>;
    }


    const postData = {
        hiking: { title: 'Hiking Trails', content: 'Explore the best hiking trails in our region.' },
        wildlife: { title: 'Wildlife Spotting', content: 'Discover the diverse wildlife you can spot.' },
        tours: { title: 'Guided Tours', content: 'Join our expert guides for a memorable experience.' }
    };

    const post = postData[slug];

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
