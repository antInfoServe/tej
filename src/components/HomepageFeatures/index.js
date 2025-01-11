import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tech Made Simple',
    Svg: require('@site/static/img/goal.svg').default,
    description: (
      <>
        Simplifying technology for non-technical professionals, making it accessible and understandable for all.
      </>
    ),
  },
  {
    title: 'Advance Your Career in Tech',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        Designed for ambitious professionals (associates to mid-senior level) pursuing careers in: Product Management | Customer Success | Tech Pre-Sales & Sales | Product Design | QA"      </>
    ),
  },
  {
    title: 'Unlock Effective Learning',
    Svg: require('@site/static/img/learning.svg').default,
    description: (
      <>
        Discover learning journeys crafted with over 10 years of expertise, balancing theory, real-world examples, and hands-on practice.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
