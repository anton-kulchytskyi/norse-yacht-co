import React from 'react';
import { ContactSectionContainer } from '@/components/Contact/ContactSectionContainer';

const WorkHoursSection = ({
  workHours
}: {
  workHours: Map<string, string>
}) => {

  const keysArr = Array.from(workHours.keys());

  return (
    <ContactSectionContainer>
      <h2 className={'text-2xl'}>Office hours</h2>
      <ul>
        {
          keysArr.map(key => (
            <li key={key}>
              {key}: {workHours.get(key)}
            </li>
          ))
        }
      </ul>
    </ContactSectionContainer>
  );
}

export default WorkHoursSection;
