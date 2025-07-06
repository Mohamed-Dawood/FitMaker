import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './Statistics.css';
import { useTranslation } from 'react-i18next';

function Statistics() {
  const { t } = useTranslation();
  const statisticsData = [
    {
      start: 0,
      end: 96,
      suffix: '%',
      info: t('statistics.satisfaction'),
      description: t('statistics.satisfactionDesc'),
    },
    {
      start: 0,
      end: 5,
      prefix: '+',
      info: t('statistics.experience'),
      description: t('statistics.experienceDesc'),
    },
    {
      start: 0,
      end: 800,
      prefix: '+',
      info: t('statistics.members'),
      description: t('statistics.membersDesc'),
    },
    {
      start: 0,
      end: 24,
      suffix: '/7',
      info: t('statistics.support'),
      description: t('statistics.supportDesc'),
    },
  ];
  return (
    <div className="statistics">
      <div className="container">
        {statisticsData.map((statistic, index) => (
          <StatisticCard key={index} statistic={statistic} />
        ))}
      </div>
    </div>
  );
}

function StatisticCard({ statistic }) {
  const { i18n } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const isArabic = i18n.language === 'ar';

  const toArabicNumerals = (str) => {
    if (!str) return str;
    const arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[0-9]/g, (w) => arabic[+w]);
  };

  const suffix = isArabic ? toArabicNumerals(statistic.suffix) : statistic.suffix;

  return (
    <div className="statistic" ref={ref}>
      <div className="statistic-number-label">
        {inView &&
          (isArabic ? (
            <span className="statistic-number" dir="ltr">
              {statistic.prefix}
              <CountUp
                start={statistic.start}
                end={statistic.end}
                duration={5}
                formattingFn={(value) =>
                  new Intl.NumberFormat('ar-EG').format(value)
                }
              />
              {suffix}
            </span>
          ) : (
            <span className="statistic-number" dir="ltr">
              <CountUp
                start={statistic.start}
                end={statistic.end}
                suffix={statistic.suffix}
                prefix={statistic.prefix}
                duration={5}
              />
            </span>
          ))}
        <h3 className="statistic-label">{statistic.info}</h3>
      </div>
      <p className="statistic-desc">{statistic.description}</p>
    </div>
  );
}

export default Statistics;
