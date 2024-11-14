import PageStyles from './page.module.css';

export default function Impact() {
  return (
    <div className={PageStyles.principlesContainer}>
      <h2 className={PageStyles.principlesTextIntro}>Impact</h2>
      <p className={PageStyles.principlesText}>
        We invest in critical projects that provide lasting, measurable benefits to national parks.
      </p>
    </div>
  );
}