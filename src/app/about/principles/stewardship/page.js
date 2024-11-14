import PageStyles from './page.module.css';

export default function Stewardship() {
  return (
    <div className={PageStyles.principlesContainer}>
      <h2 className={PageStyles.principlesTextIntro}>Stewardship</h2>
      <p className={PageStyles.principlesText}>
        We foster a culture of stewardship of our national parks and the investments we make in them.
      </p>
    </div>
  );
}