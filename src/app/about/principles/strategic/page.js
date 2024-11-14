import PageStyles from './page.module.css';

export default function Strategic() {
  return (
    <div className={PageStyles.principlesContainer}>
      <h2 className={PageStyles.principlesTextIntro}>Strategic</h2>
      <p className={PageStyles.principlesText}>
        We work with the National Park Service to identify, fund, and advance priority initiatives.
      </p>
    </div>
  );
}
