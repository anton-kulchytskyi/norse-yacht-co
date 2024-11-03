import React from 'react';

type ContactSectionContainerProps = {
  children: React.ReactNode;
};

export const ContactSectionContainer = ({
  children
}: ContactSectionContainerProps) => {
  return (
    <article className={'my-5'}>
      {children}
    </article>
  );
};

export default ContactSectionContainer;
