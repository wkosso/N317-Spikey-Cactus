

import PageStyles from './page.module.css';

export default function Wildlife() {
    return (
        <div className={PageStyles.thirdSection}>
            <div className={PageStyles.infoBox}>
                <h3>Wildlife Spotting</h3>
                <p>
                    The park is home to a wide range of wildlife, including over 200 bird species and unique mammals such as the javelina and bobcat. Birdwatchers will enjoy spotting the colorful cactus wren and elusive roadrunner.
                </p>
                <p>
                    Early mornings and late afternoons are the best times to observe wildlife. Visitors may also encounter reptiles like the desert tortoise and rattlesnake basking in the sun. Remember to maintain a safe distance and never feed the animals.
                </p>
                <p>
                    Bring binoculars for a closer look, and keep your camera ready for unexpected sightings. The park’s diverse habitats support a rich variety of life, making each visit a new opportunity for discovery.
                </p>
            </div>
        </div>
    );
}
