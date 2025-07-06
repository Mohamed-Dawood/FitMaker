import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
} from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'X', url: 'https://x.com', icon: X },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube },
];

// Custom socials for Mohamed Basyouni Dawood
const designerSocials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mohamed.bdawod.5',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.linkedin.com/in/mohamed-basyouni-dawood/',
    icon: Instagram,
  },
  { name: 'X', url: 'https://x.com/MooDawood', icon: X },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@mohameddawood9253',
    icon: Youtube,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohamed-basyouni-dawood/',
    icon: Linkedin,
  },
];

const iconMap = { MapPin, Phone, Mail };

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const companyLinks = t('footer.companyLinks', { returnObjects: true });
  const resourcesLinks = t('footer.resourcesLinks', { returnObjects: true });
  const programsLinks = t('footer.programsLinks', { returnObjects: true });
  const contactInfo = t('footer.contactInfo', { returnObjects: true });
  const designerName = isArabic
    ? 'محمد بسيوني داود'
    : 'Mohamed Basyouni Dawood';
  const attributionText = isArabic ? 'تصميم المهندس' : 'Design by Engineer';

  return (
    <footer className="footer-section" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container footer-container">
        <div className="footer-about">
          <Logo />
          <div className="footer-tagline">{t('footer.tagline')}</div>
          <p className="footer-desc">
            <Trans i18nKey="footer.description">
              With over 5 years of experience, we offer expert coaching,
              tailored workout plans, and comprehensive nutritional guidance.
              Start your journey towards a healthier, stronger you. Ready to
              make a change?
            </Trans>
          </p>
          <div className="footer-socials">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="footer-social-link"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links-col">
          <div className="footer-col-title">{t('footer.programs')}</div>
          <ul>
            {programsLinks.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links-col">
          <div className="footer-col-title">{t('footer.company')}</div>
          <ul>
            {companyLinks.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links-col">
          <div className="footer-col-title">{t('footer.resources')}</div>
          <ul>
            {resourcesLinks.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links-col">
          <div className="footer-col-title">{t('footer.contact')}</div>
          <ul className="footer-contact-list">
            {contactInfo.map(({ icon, text }) => {
              const Icon = iconMap[icon];
              return (
                <li key={text}>
                  {Icon && <Icon size={18} className="footer-contact-icon" />}{' '}
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-attribution">
        <span>
          {attributionText} <span className="designer">{designerName}</span>
        </span>
        <span className="footer-attribution-socials">
          {designerSocials.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="footer-social-link"
            >
              <Icon size={20} />
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
