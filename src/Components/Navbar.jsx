import Logo from './Logo';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const { t, i18n } = useTranslation();

  function handleOpenNav() {
    setIsOpen(() => !isOpen);
  }

  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }

  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <ul className={!isOpen ? 'open' : ''}>
          <li>
            <HashLink smooth to="/#home">
              {t('navbar.home')}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#plans">
              {t('navbar.programs')}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#progress">
              {t('navbar.coaching')}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#plans">
              {t('navbar.membership')}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#utilities">
              {t('navbar.about')}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#questions">
              {t('navbar.question')}
            </HashLink>
          </li>
          <li>
            <Link to="/login" className="login-link">
              {t('navbar.login')}
            </Link>
          </li>
          <li>
            <Link to="/signup" className="signup-link">
              {t('navbar.signup')}
            </Link>
          </li>
          <li>
            <button
              id="language-button"
              className="nav-link"
              onClick={toggleLanguage}
            >
              {t('navbar.lang')}
            </button>
          </li>
        </ul>
        <div
          className={`bars${!isOpen ? ' open' : ''}`}
          onClick={handleOpenNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
