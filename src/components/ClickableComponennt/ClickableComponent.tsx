import { LinkProps, ButtonProps } from '@/lib/interfaces/clickable.interface';
import LinkComponent from './LinkComponent';
import ButtonComponent from './ButtonComponent';

function isPropsForLinkElement(
  props: ButtonProps | LinkProps
): props is LinkProps {
  return 'href' in props;
}

const ClickableComponent = (props: ButtonProps | LinkProps) => {
  const { children } = props;
  if (isPropsForLinkElement(props)) {
    return <LinkComponent {...props}>{children}</LinkComponent>;
  }
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default ClickableComponent;
