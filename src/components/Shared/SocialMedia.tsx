import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';
import Instagram from '@/components/SvgIcons/Instagram';
import Telegram from '@/components/SvgIcons/Telegram';
import WhatsApp from '@/components/SvgIcons/WhatsApp';

type Props = {
  color: string;
  footer?: boolean;
};

const SocialMedia = ({ color, footer }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <span
        className={`text-2xl font-baiJ font-medium ${footer ? 'text-white' : 'text-primary'}`}
      >
        Follow us
      </span>
      <div className="flex space-x-4">
        <ClickableComponent
          href="https://www.instagram.com/norseyachtcom/"
          target="_blank"
          variant="icon"
        >
          <Instagram
            color={color}
            footer={footer}
          />
        </ClickableComponent>
        <ClickableComponent
          href="https://t.me/norseyacht"
          target="_blank"
          variant="icon"
        >
          <Telegram
            color={color}
            footer={footer}
          />
        </ClickableComponent>
        <ClickableComponent
          href="https://chat.whatsapp.com/HEclUDIVs1h4Ht5hJzXu0Q"
          target="_blank"
          variant="icon"
        >
          <WhatsApp
            color={color}
            footer={footer}
          />
        </ClickableComponent>
      </div>
    </div>
  );
};

export default SocialMedia;
