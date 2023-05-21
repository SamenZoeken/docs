import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type Section = {
  id?: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  btnText?: string;
  btnLink?: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const Sections: Section[] = [
  {
    title: 'Oorsprong',
    subTitle: 'Samen Zoeken App',
    imgUrl: 'img/emilietta_250px.jpg',
    btnText: 'Lees het verhaal',
    btnLink: '/blog/samenzoeken-app-idee',
    description: (
      <>
        <p>
          Na de verdwijning van
          <a
            href="https://www.vrt.be/vrtnws/nl/2023/02/28/lichaam-gevonden/"
            target="_blank"
          > Emilietta Chini </a> in 2023
          lijdend aan dementie, ging haar familie massaal naar haar op zoek,
          geholpen door honderden vrijwilligers.
        </p>
        <p >
          Al snel werd duidelijk dat het erg moeilijk is om met zo een grote
          groep gecoördineerd te zoeken. Wie is waar al gaan kijken? Hoe
          grondig is er al gezocht, en in welk gebied?</p>
        <p>
          "Ik heb lang gezocht, maar zo een app bestond niet. 
          Dus ben ik 'm zelf gaan ontwikkelen," zegt neef Ben Chini.</p>      </>
    )
  },
  {
    title: 'Professionele',
    subTitle: 'stafkaarten',
    imgUrl: 'img/SamenzoekenScreenshotMaps.png',
    btnText: 'Kaarten',
    btnLink: '/docs/maps',
    description: (
      <>
        Professionele stafkaarten, die instanties ook gebruiken, die normaal niet gratis te verkrijgen is.
      </>
    )
  },
  {
    title: 'Op één kaart',
    subTitle: 'samen zoeken',
    imgUrl: 'img/SamenzoekenScreenshot.png',
    btnText: 'Hoe werkt het',
    btnLink: '/docs/how',
    description: (
      <>
        Na het openen van de app zie je de gemeenschappelijke kaart, met alle routes die al gelopen zijn.
      </>
    )
  }
];

function Section(props: Section) {
  return (
    <section className={clsx('Section', styles.section)}>
      <div className={clsx('container')}>
        <div className={clsx('row')}>
          {(props.id % 2 == 0) ?
            <>
              <SectionImage {...props} />
              <SectionText {...props} />
            </>
            :
            <>
              <SectionText {...props} />
              <SectionImage {...props} />
            </>
          }
        </div>
      </div>
    </section>
  );
}

function SectionImage({ imgUrl }: Section) {
  return (
    <div className={clsx('col col-md-8', styles.middle)}>
      <div className="text--center">
        <img src={imgUrl} className={styles.sectionImage} />
      </div>
    </div>
  )
}

function SectionText({ title, subTitle, description, btnLink, btnText }: Section) {
  return (
    <div className={clsx('col col-md-4', styles.middle)}>
      <div className="padding-horiz--md">
        <h1 className={styles.sectionH1}>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        {(btnText && <Link
          className="button button--secondary button--lg"
          to={btnLink}>
          {btnText}
        </Link>
        )}
      </div>
    </div>
  )
}

export default function HomePageSections(): JSX.Element {
  return (
    <div className={clsx('Sections')}>
      {Sections.map((props, idx) => (
        props.id = idx,
        <Section key={idx} {...props} />
      ))}
    </div>
  );
}
