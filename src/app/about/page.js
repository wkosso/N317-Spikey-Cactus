"use client";
import PageStyles from "./about.module.css";
export default function NewDocs() {
    return (
        <main>
            <div className={PageStyles.aboutBanner}>
                <h1 className={PageStyles.aboutBannerTitle}>About Saguaro Wildlife </h1>
            </div>

<div className={PageStyles.aboutContent}>
            <div  className={PageStyles.aboutContentTextOne}>

            As the official nonprofit partner of the National Park Service, the National Park Foundation generates private support and builds strategic partnerships to protect and enhance America’s national parks for present and future generations.<br></br>

Chartered by Congress in 1967, the National Park Foundation is rooted in a legacy that began more than a century ago, when private citizens from all walks of life took action to establish and protect our national parks. Today, the National Park Foundation carries on that tradition as the only national charitable nonprofit whose mission is to directly support the National Park Service.
            </div>

<div  className={PageStyles.aboutContenttextTitle} >The History of Our National Parks</div>

<div className={PageStyles.aboutContenttextTwo}>The preservation of our most magnificent and meaningful places for the purpose of public appreciation and recreation is a uniquely American idea. The Yosemite Grant was signed by President Abraham Lincoln in 1864. And with it, for the first time, the federal government set aside parkland for preservation and public use. This protected landscape includes iconic American features such as Bridalveil Fall, Half Dome Rock, and some of the oldest trees on Earth, the giant Sequoias.


</div>
<div className={PageStyles.aboutContentTextImg} ></div>

            </div>
        </main>
    );
}