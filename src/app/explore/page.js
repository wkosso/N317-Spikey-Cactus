"use client";
import PageStyles from "./explore.module.css";
import Link from "next/link";

export default function NewDocs() {
    return (
        <main>
            <div className={PageStyles.exploreBanner}>
                <h1 className={PageStyles.exploreBannerTitle}>Explore Saguaro Wildlife</h1>
            </div>
            <div className={PageStyles.feedbackLinkContainer}>
                <Link href="/explore/activities/feedback" className={PageStyles.feedbackLink}>
                    Leave Your Feedback
                </Link>
            </div>
        </main>
    );
}