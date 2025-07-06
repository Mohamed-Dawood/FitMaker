import { useTranslation, Trans } from 'react-i18next';
import Abdalah from '../images/Abdalah.png';
import './Home.css';

function Home() {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="home"
    >
      <div className="container">
        <div className="text">
          <h1>
            <Trans i18nKey="home.title">
              Achieve your <span>fitness goal</span> with fitMaker
            </Trans>
          </h1>
          <p>{t('home.desc')}</p>
          <div className="buttons">
            <button>{t('home.start')}</button>
            <button>{t('home.explore')}</button>
          </div>
        </div>
        <div className="image">
          <img src={Abdalah} alt="Abdalah" />
        </div>
      </div>
    </div>
  );
}

export default Home;
