

import PageStyles from './page.module.css';

export default function Hiking() {
    return (
        <div className={PageStyles.thirdSection}>
            <div className={PageStyles.infoBox}>
                <h3>Hiking Trails</h3>
                <p>
                    The park offers a variety of trails, from short, easy walks to challenging all-day hikes. Each trail provides a unique perspective on the diverse desert landscape. Hike through dense saguaro forests or explore rocky mountain paths with breathtaking views.
                </p>
                <p>
                    Trails are well-marked, and maps are available at the visitor center. Be sure to bring plenty of water, sunscreen, and a hat, as temperatures can soar during the day. Experience the beauty of the desert as you traverse through the different elevations and ecosystems of the park.
                </p>
                <p>
                    Guided hikes are available for those interested in learning more about the flora and fauna of the region. Rangers offer educational insights on the geology, history, and wildlife along the way.
                </p>
            </div>
        </div>
    );
}