import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Plans.css';

const planKeys = ['pro', 'custom', 'beginner'];

function Plans() {
  const { t, i18n } = useTranslation();
  const [billing, setBilling] = useState('monthly');
  const [filter, setFilter] = useState('all');
  const isArabic = i18n.language === 'ar';

  // Filtered plan keys
  const filteredPlanKeys =
    filter === 'all' ? planKeys : [filter];

  return (
    <section
      id="plans"
      className="plans-section"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <h2 className="plans-title">
          <span>{t('plans.sectionTitle').split(' ')[0]}</span>{' '}
          {t('plans.sectionTitle').split(' ').slice(1).join(' ')}
        </h2>
        <p className="plans-desc">{t('plans.sectionDesc')}</p>
        <div className="plans-toggle-row">
          <button
            className={`plans-toggle${billing === 'monthly' ? ' active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            {t('plans.monthly')}
          </button>
          <button
            className={`plans-toggle${billing === 'annually' ? ' active' : ''}`}
            onClick={() => setBilling('annually')}
          >
            {t('plans.annually')}
          </button>
        </div>
        {/* Filter Buttons */}
        <div className="plans-filter-row">
          <button
            className={`plans-filter-btn${filter === 'all' ? ' active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t('plans.filterAll', 'All')}
          </button>
          <button
            className={`plans-filter-btn${filter === 'beginner' ? ' active' : ''}`}
            onClick={() => setFilter('beginner')}
          >
            {t('plans.beginner.title', 'Beginner')}
          </button>
          <button
            className={`plans-filter-btn${filter === 'pro' ? ' active' : ''}`}
            onClick={() => setFilter('pro')}
          >
            {t('plans.pro.title', 'Pro')}
          </button>
          <button
            className={`plans-filter-btn${filter === 'custom' ? ' active' : ''}`}
            onClick={() => setFilter('custom')}
          >
            {t('plans.custom.title', 'Custom')}
          </button>
        </div>
        <div className="plans-cards">
          {filteredPlanKeys.map((key) => {
            const plan = t(`plans.${key}`, { returnObjects: true });
            const price = billing === 'monthly' ? plan.priceMonthly : plan.priceAnnually;
            return (
              <div className={`plan-card plan-card-${key}`} key={key}>
                <div className="plan-card-header">
                  <span className="plan-package">{plan.package}</span>
                  <span className="plan-title">{plan.title}</span>
                  <span className="plan-desc">{plan.desc}</span>
                </div>
                <div className="plan-features">
                  <span className="features-title">{t('plans.features', 'Features')}</span>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-price-row">
                  <span className="plan-price">{price}<span className="plan-currency">{t('plans.currency')}</span></span>
                </div>
                <button className="plan-choose-btn">{plan.button}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Plans; 