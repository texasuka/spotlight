import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/uka.png';

const FirstLeftText = () => <p>What are spotlights?</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the{' '}
    <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      pre-shadowed homepage template
    </a>
    . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      UKA Homepage →
    </a>
  </p>
);

const SecondLeftText = () => <p>Want to feature with us?</p>;

const SecondRightText = () => (
  <p>
    If you want to feature in one of our interviews or join our spotlight team, email us below!
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
