
import PageStyles from './page.module.css';

export default function Tours() {
    return (
        <div className={PageStyles.thirdSection}>
            <div className={PageStyles.infoBox}>
                <h3>Guided Tours</h3>
                <p>
                    Join one of our guided tours for an in-depth exploration of the park's unique ecosystem. Led by knowledgeable rangers, these tours offer fascinating insights into the history, geology, and biology of the desert environment.
                </p>
                <p>
                    Tours are available throughout the day, covering different themes such as "Desert Nightlife" and "Cactus Cultures." Whether you’re interested in learning about the ancient saguaro or the nocturnal creatures of the desert, there’s a tour for everyone.
                </p>
                <p>
                    Reservations are recommended as spots fill up quickly, especially during the peak season. Comfortable walking shoes, hats, and water bottles are essential for an enjoyable experience.
                </p>
            </div>
        </div>
    );
}
