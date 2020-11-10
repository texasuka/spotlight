import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/uka.png';

const FirstLeftText = () => <p>What are spotlights?</p>;

const FirstRightText = () => (
  <p>
    This webpage is made by {' '} 
    <a href="https://texasuka.org">
     Undergraduate Korean Association's
    </a> spotlight project, {' '}
    a series of <br/><code> bi-monthly</code> interviews with {' '}
    <code>UT Austin students</code>{' '}.
    <a
      className={calloutLink}
      href="https://texasuka.org">
      UKA Homepage →
    </a>
  </p>
);

const SecondLeftText = () => <p>Want to feature with us?</p>;

const SecondRightText = () => (
  <p>
    If you want to feature in one of our interviews, email us below!
    <a
      className={calloutLink}
      href="mailto:admin@texasuka.org">
      Send an email →
    </a>
  </p>
);

const BannerText = () => <h1>UKA Spotlights</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
