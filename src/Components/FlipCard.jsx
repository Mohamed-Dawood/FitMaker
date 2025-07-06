import { useState } from 'react';
import './FlipCard.css';
import { useTranslation } from 'react-i18next';

const FlipCard = ({ frontImage, backImage, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
          <p>{t(frontText, frontText)}</p>
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="Back" />
          <p>{t(backText, backText)}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
