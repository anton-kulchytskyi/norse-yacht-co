type NavbarFooterLogoProps = {
  navbar?: boolean;
};

const NavbarFooterLogo = ({ navbar }: NavbarFooterLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={300}
      height={38}
      viewBox="0 0 300 38"
      fill="none"
      className={` w-48 md:w-52 2xl:w-80 ${navbar ? 'fill-primary' : 'fill-secondary-100'}`}
    >
      <path d="M35.9275 0.067749H1.07246C0.480158 0.067749 0 0.547906 0 1.14021V36.8598C0 37.4521 0.480159 37.9322 1.07246 37.9322H22.327C22.9193 37.9322 23.3994 37.4521 23.3994 36.8598V24.1742C23.3994 15.3398 28.0493 7.15745 35.6391 2.63613L36.4764 2.13731C36.8011 1.9439 37 1.59387 37 1.21594V1.14021C37 0.547907 36.5198 0.067749 35.9275 0.067749Z" />
      <path d="M25.0701 29.1691V23.3194C25.0701 15.7664 29.0465 8.77116 35.5364 4.9073C36.1818 4.52305 37 4.98813 37 5.73927V28.9732C37 29.3551 36.6903 29.6648 36.3084 29.6648H25.5657C25.292 29.6648 25.0701 29.4429 25.0701 29.1691Z" />
      <path d="M25.7621 31.3113L36.3088 31.3178C36.6906 31.318 37 31.6276 37 32.0094V37.0752C37 37.4571 36.6903 37.7668 36.3084 37.7668H25.7617C25.3797 37.7668 25.0701 37.4571 25.0701 37.0752V32.0029C25.0701 31.6208 25.38 31.3111 25.7621 31.3113Z" />
      <text
        x="55%"
        y="80%"
        textAnchor="middle"
        className={`flex text-3xl font-baiJ font-bold ${navbar ? 'fill-primary' : 'fill-white'}`}
      >
        Norse Yachts Co.
      </text>
    </svg>
  );
};

export default NavbarFooterLogo;
