import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import utilitiesImage from '../images/utilities.jpg';
import './Utilities.css';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { useTranslation, Trans } from 'react-i18next';

function Utilities() {
  const { t } = useTranslation();
  const items = t('utilities.items', { returnObjects: true });
  return (
    <div
      id="utilities"
    >
      <div className="utilities">
        <div className="section-header">
          <h2>
            <Trans i18nKey="utilities.title">
              our <span>utilities</span>
            </Trans>
          </h2>
          <p>{t('utilities.desc')}</p>
        </div>
        <div className="container">
          <div className="image">
            <img src={utilitiesImage} alt="utilitiesImage" />
          </div>
          <div className="info">
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  {item}
                </li>
              ))}
            </ul>
            <button>{t('utilities.readMore')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
