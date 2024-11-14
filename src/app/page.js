import Link from "next/link";
import PageStyles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className={PageStyles.homeBanner}>
        <h1 className={PageStyles.homeBannerTitle}>Saguaro Wildlife Park</h1>
      </div>


      <div className={PageStyles.homecontentContainer}>
        <div className={PageStyles.homecontentText}>Saguaro National Park protects our largest cacti species, the saguaro, and features camping, hiking, and backpacking trails for every level.
          For many, the Giant Saguaro cactus, silhouetted by the setting sun, is the universal symbol of the American West. And yet, these majestic plants are only found in a small portion of the United States. On the edge of the modern City of Tucson, Saguaro Park protects some of the most impressive forests of these sub-tropical giants, which can live for 200 years and grow to 50 feet tall.
        </div>

        <div className={PageStyles.planboxContainer} >

          <div>Planning a Visit?
            For information about the park, visit the National Park Service website for Saguaro National Park:</div>

          <div className={PageStyles.planbutton}>Learn More</div>
        </div>
      </div>

      {/* Third Section - Last Three Divs */}
      <div className={PageStyles.thirdSection}>
        {/* Hiking Trails Section */}
        <div className={PageStyles.infoBox}>
          <Link href="explore/activities/hiking">
            <h3 className={PageStyles.link}>Hiking Trails</h3>
          </Link>
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

        {/* Wildlife Spotting Section */}
        <div className={PageStyles.infoBox}>
          <Link href="explore/activities/wildlife">
            <h3 className={PageStyles.link}>Wildlife Spotting</h3>
          </Link>
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

        {/* Guided Tours Section */}
        <div className={PageStyles.infoBox}>
          <Link href="explore/activities/tours">
            <h3 className={PageStyles.link}>Guided Tours</h3>
          </Link>
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
    </main >
  );
}
