interface Clickable {
  text: string | JSX.Element;
}

export interface ButtonProps extends Clickable {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

export interface LinkProps extends Clickable {
  href: string;
  variant?: 'button' | 'nav' | 'footer' | 'text' | 'icon';
}
