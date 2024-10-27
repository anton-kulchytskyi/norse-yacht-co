import React from 'react';
import { commonStyles } from '@/components/Contact/common';
import { WorkHoursSectionProps } from '@/lib/propTypes/ContactPage/WorkHoursSectionProps';

const WorkHoursSection = ({
  workHours
}: WorkHoursSectionProps) => {

  const keysArr = Array.from(workHours.keys());

  return (
    <article className={commonStyles.container}>
      <h2 className={commonStyles.subHeader}>Office hours</h2>
      <ul>
        {
          keysArr.map(key => (
            <li key={key}>
              {key}: {workHours.get(key)}
            </li>
          ))
        }
      </ul>
    </article>
  );
}

export default WorkHoursSection;
