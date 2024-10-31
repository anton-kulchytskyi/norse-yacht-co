interface Clickable {
  children?: React.ReactNode;
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
    | 'imgContainer'
    | 'yachtName'
    | 'currency'
    | 'secondaryButton';
}

export interface ButtonProps extends Clickable {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

export interface LinkProps extends Clickable {
  href: string;
  target?: string;
}
