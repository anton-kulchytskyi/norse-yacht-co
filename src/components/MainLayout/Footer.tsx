import React from 'react';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import Logo from '@/components/SvgIconsComponents/Logo';

const styles = {
  footer: "bg-[#4d6575] w-full flex flex-col justify-center items-center p-4",
  sectionDefault: "flex items-center justify-between mt-8",
  headerSection: "flex items-center justify-between",
  headerSection_header: "text-xl text-white",
  linkList: "grid grid-cols-2 gap-x-10 gap-y-6 text-white text-sm"
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.sectionDefault}>
        <span>
          <ClickableComponent
            text={<Logo type={'footer'} />}
            href="/"
            variant="logo"
          />
        </span>
        <h2 className={styles.headerSection_header}>Norse Yacht Co.</h2>
      </section>

      <section className={styles.sectionDefault}>
        <ul className={styles.linkList}>
          <li>Yachts</li>
          <li>Terms of use</li>

          <li>How it works?</li>
          <li>Cookies policy</li>

          <li>Services</li>
          <li>Privacy policy</li>

          <li>Reviews</li>
          <li>About us</li>
        </ul>
      </section>

      <section
        className={
          styles.sectionDefault +
          ' flex flex-col justify-center items-center w-full'
        }
      >
        <span className={'text-sm text-white'}>Social Media</span>
        <ul className={'flex flex-row justify-between w-1/2 my-4'}>
          <li>
            <a
              target="_blank"
              className="socialMediaIcons_icon__Yb1mc"
              href="https://www.instagram.com/norseyachtcom/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
              >
                <rect
                  width="40"
                  height="40"
                  fill="#fff"
                  rx="20"
                ></rect>
                <path
                  fill="#ec9947"
                  d="M20 11.807h4.096c.964 0 1.446.241 1.808.362.482.24.843.361 1.204.723.362.361.603.723.723 1.204.12.362.241.844.362 1.808v8.192c0 .964-.241 1.446-.362 1.808-.24.482-.361.843-.723 1.204-.361.362-.723.603-1.204.723-.362.12-.844.241-1.808.362h-8.192c-.964 0-1.446-.241-1.808-.362-.482-.24-.843-.361-1.204-.723-.362-.361-.603-.723-.723-1.204-.12-.362-.241-.844-.362-1.808v-8.192c0-.964.241-1.446.362-1.808.24-.482.361-.843.723-1.204.361-.362.723-.603 1.204-.723.362-.12.844-.241 1.808-.362H20ZM20 10h-4.096c-1.085 0-1.808.241-2.41.482a5.263 5.263 0 0 0-1.807 1.205c-.603.602-.844 1.084-1.205 1.807-.241.602-.361 1.325-.482 2.41v8.192c0 1.085.241 1.808.482 2.41a5.263 5.263 0 0 0 1.205 1.807c.602.603 1.084.844 1.807 1.205.602.241 1.325.361 2.41.482h8.192c1.085 0 1.808-.241 2.41-.482a5.263 5.263 0 0 0 1.807-1.205c.603-.602.844-1.084 1.205-1.807.241-.602.361-1.325.482-2.41v-8.192c0-1.085-.241-1.808-.482-2.41a5.263 5.263 0 0 0-1.205-1.807c-.602-.603-1.084-.844-1.807-1.205-.602-.241-1.325-.361-2.41-.482H20Z"
                ></path>
                <path
                  fill="#ec9947"
                  d="M20 14.82A5.142 5.142 0 0 0 14.82 20c0 2.892 2.288 5.18 5.18 5.18s5.18-2.288 5.18-5.18-2.288-5.18-5.18-5.18Zm0 8.553A3.368 3.368 0 0 1 16.627 20 3.368 3.368 0 0 1 20 16.627 3.368 3.368 0 0 1 23.373 20c0 1.807-1.566 3.373-3.373 3.373ZM25.301 15.904a1.205 1.205 0 1 0 0-2.41 1.205 1.205 0 0 0 0 2.41Z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="socialMediaIcons_icon__Yb1mc"
              href="https://t.me/norseyacht"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
              >
                <rect
                  width="40"
                  height="40"
                  fill="#fff"
                  rx="20"
                ></rect>
                <path
                  fill="#ec9947"
                  d="m28 12.602-3.005 15.69s-.42 1.088-1.576.566l-6.934-5.505-.033-.017c.937-.87 8.2-7.633 8.518-7.94.491-.475.186-.757-.384-.399l-10.73 7.056-4.138-1.442s-.652-.24-.714-.762c-.064-.523.735-.805.735-.805l16.874-6.855S28 11.558 28 12.602Z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="socialMediaIcons_icon__Yb1mc"
              href="https://chat.whatsapp.com/HEclUDIVs1h4Ht5hJzXu0Q"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
              >
                <rect
                  width="40"
                  height="40"
                  fill="#fff"
                  rx="20"
                ></rect>
                <path
                  fill="#ec9947"
                  d="M27.927 12.063A10.428 10.428 0 0 0 20.537 9c-5.78 0-10.464 4.667-10.464 10.427 0 1.823.512 3.646 1.39 5.177L10 30l5.561-1.458c1.537.802 3.22 1.24 4.976 1.24 5.78 0 10.463-4.667 10.463-10.428-.073-2.698-1.098-5.323-3.073-7.291Zm-2.342 11.083c-.22.583-1.244 1.166-1.756 1.24a4.104 4.104 0 0 1-1.61-.073c-.365-.146-.878-.292-1.463-.584-2.634-1.094-4.317-3.719-4.463-3.937-.147-.146-1.098-1.386-1.098-2.698 0-1.313.659-1.896.878-2.188.22-.291.512-.291.732-.291h.512c.146 0 .366-.073.585.437.22.51.732 1.823.805 1.896a.463.463 0 0 1 0 .437c-.073.146-.146.292-.292.438-.147.146-.293.364-.366.437-.147.146-.293.292-.147.51.147.293.659 1.095 1.464 1.824 1.024.875 1.83 1.166 2.122 1.312.293.146.439.073.585-.073.146-.145.659-.729.805-1.02.146-.292.366-.22.585-.146.22.073 1.537.729 1.756.875.293.145.44.218.513.291.073.22.073.73-.147 1.313Z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>

        <span className={"text-gray-400 text-sm"}>
          {/*<svg xmlns="http://www.w3.org/2000/svg" width="197px" height="197px" version="1.1">*/}
          {/*  <circle cx="98" cy="98" r="98" fill="black" />*/}
          {/*  <circle cx="98" cy="98" r="78" fill="#4d6575" />*/}
          {/*  <circle cx="98" cy="98" r="55" fill="black" />*/}
          {/*  <circle cx="98" cy="98" r="30" fill="#4d6575" />*/}
          {/*  <rect x="115" y="85" width="45" height="25" fill="#4d6575" />*/}
          {/*</svg>*/}

          Norse Yachts Co. Всі права захищені.
        </span>
      </section>
    </footer>
  );
};


export default Footer;
