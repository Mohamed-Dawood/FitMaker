import Accordion from '../Components/Accordion';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

function Questions() {
  const { t } = useTranslation();
  const faqs = t('questions.faqs', { returnObjects: true });
  return (
    <motion.div
      id="questions"
      className="questions"
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
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
    </motion.div>
  );
}

export default Questions;
