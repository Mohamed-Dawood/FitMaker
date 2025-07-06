import Accordion from '../Components/Accordion';
import { useTranslation, Trans } from 'react-i18next';

function Questions() {
  const { t } = useTranslation();
  const faqs = t('questions.faqs', { returnObjects: true });
  return (
    <div
      id="questions"
      className="questions"
    >
      <div className="container">
        <div className="section-header">
          <h2>
            <Trans i18nKey="questions.title">
              frequently asked <span>question</span>
            </Trans>
          </h2>
        </div>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
}

export default Questions;
