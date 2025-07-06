import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import Abdalah from '../images/Abdalah.png';
import './Home.css';

function Home() {
  const { t } = useTranslation();
  return (
    <motion.div
      id="home"
      className="home"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
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
    </motion.div>
  );
}

export default Home;
