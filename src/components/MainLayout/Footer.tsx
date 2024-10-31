import React from 'react';
import NavbarFooterLogo from '@/components/SvgIconsComponents/NavbarFooterLogo';
import { footerLinks } from '@/data/links/footerLinks';
import ClickableComponent from '../ClickableComponent/ClickableComponent';
import CopyRight from '../SvgIconsComponents/CopyRight';
import SocialMedia from '../Shared/SocialMedia';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row px-5 md:px-16 py-4 md:py-6 xl:py-8 bg-primary">
      <div className="flex-1 mx-auto">
        <ClickableComponent
          href="/"
          variant="logo"
        >
          <NavbarFooterLogo />
        </ClickableComponent>
        <span className="hidden lg:block">
          <CopyRight />
        </span>
      </div>
      <div className="flex-1 mx-auto">
        <div className="grid grid-cols-2 gap-10">
          {footerLinks.map((link) => (
            <ClickableComponent
              key={link.title}
              href={link.href}
              variant="footer"
            >
              {link.title}
            </ClickableComponent>
          ))}
        </div>
      </div>
      <div className="flex-1 mx-auto space-y-4">
        <SocialMedia
          color="#E7801A"
          footer
        />
        <div className="lg:hidden">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
