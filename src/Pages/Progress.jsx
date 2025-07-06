import FlipCard from '../Components/FlipCard';
import './Progress.css';
import frontImage1 from '../images/WhatsApp Image 2025-01-23 at 20.07.43_2b27d14b.jpg';
import backImage1 from '../images/utilities.jpg';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

const defaultCardData = [
  {
    frontImage: './fitmaker1.jpg',
    frontText: 'Before',
    backImage: './fitmaker2.jpg',
    backText: 'After',
  },
  {
    frontImage: './fitmakee3.jpg',
    frontText: 'After',
    backImage: './fitmaker4.jpg',
    backText: 'Before',
  },
  {
    frontImage: './fitmaker5.jpg',
    frontText: 'Before',
    backImage: './fitmaker6.jpg',
    backText: 'After',
  },
];

function Progress() {
  const { t } = useTranslation();
  // You can add translation for cardData if needed, for now fallback to defaultCardData
  const cardData = defaultCardData;
  return (
    <motion.div
      id="progress"
      className="progress"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <h2>
            <Trans i18nKey="progress.title">
              our <span>progress</span>
            </Trans>
          </h2>
        </div>
        <div className="cards">
          {cardData.map((card, index) => (
            <FlipCard
              key={index}
              frontImage={card.frontImage}
              frontText={card.frontText}
              backImage={card.backImage}
              backText={card.backText}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Progress;
