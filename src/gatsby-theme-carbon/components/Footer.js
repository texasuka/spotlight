import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Copyright &copy; 2020 - {buildTime}
    </p>
    <p>
    Made with <code>&hearts;</code> by UKA Informatics, built on <code>gatsby.js</code>
    </p>
  </>
);
const UKALogo = () => (
  <span/>
);

const links = {
  firstCol: [
    { href: 'https://texasuka.org', linkText: 'Undegraduate Korean Association' },
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={UKALogo}/>;

export default CustomFooter;
