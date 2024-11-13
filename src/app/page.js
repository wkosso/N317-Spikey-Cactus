import Image from "next/image";
import Link from "next/link";
import PageStyles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className={PageStyles.homeBanner}></div>
    </main>
  );
}
