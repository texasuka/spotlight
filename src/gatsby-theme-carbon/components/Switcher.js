import React from 'react';
import {SwitcherDivider, SwitcherLink} from 'gatsby-theme-carbon/src/components/Switcher';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher/Switcher'


const CustomSwitcher = (props) => (
  <Switcher {...props}>
    <SwitcherDivider>Links</SwitcherDivider>
    <SwitcherLink href="https://texasuka.org">
      UKA Homepage
    </SwitcherLink>
    <SwitcherLink href="https://texasuka.org/tv">
      UKA TV
    </SwitcherLink>
  </Switcher>
);

export default CustomSwitcher;