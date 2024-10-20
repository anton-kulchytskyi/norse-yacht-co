interface Clickable {
  text: string | JSX.Element;
  variant:
    | 'linkButton'
    | 'nav'
    | 'footer'
    | 'text'
    | 'icon'
    | 'menu'
    | 'close'
    | 'logo';
}

export interface ButtonProps extends Clickable {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

export interface LinkProps extends Clickable {
  href: string;
}
