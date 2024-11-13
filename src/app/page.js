import Image from "next/image";
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
    </main>
  );
}
