import React from 'react';
import NavbarFooterLogo from '@/components/SvgIconsComponents/NavbarFooterLogo';

const Footer = () => {
  return (
    <div className="h-[440px] xl:h-64 bg-primary">
      <hr />
      <h3>Footer</h3>
      <NavbarFooterLogo />
      <p className="font-roboto">Move it down</p>
    </div>
  );
};

export default Footer;
