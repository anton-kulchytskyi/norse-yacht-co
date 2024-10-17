import { LinkProps, ButtonProps } from '@/lib/interfaces/clickable.interface';
import LinkComponent from './LinkComponent';
import ButtonComponent from './ButtonComponent';

function isPropsForLinkElement(
  props: ButtonProps | LinkProps
): props is LinkProps {
  return 'href' in props;
}

const ClickableComponent = (props: ButtonProps | LinkProps) => {
  if (isPropsForLinkElement(props)) {
    return <LinkComponent {...props} />;
  }
  return <ButtonComponent {...props} />;
};

export default ClickableComponent;
