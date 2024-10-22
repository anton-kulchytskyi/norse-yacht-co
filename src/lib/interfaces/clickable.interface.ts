interface Clickable {
  text: string | JSX.Element | Promise<JSX.Element>;
  variant:
    | 'linkButtonPrimary'
    | 'linkButtonSecondary'
    | 'nav'
    | 'footer'
    | 'text'
    | 'icon'
    | 'menu'
    | 'close'
    | 'logo'
    | 'imgContainer';
}

export interface ButtonProps extends Clickable {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

export interface LinkProps extends Clickable {
  href: string;
}
