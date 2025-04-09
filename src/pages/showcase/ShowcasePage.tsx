import React from 'react';
import ShowcaseButtons from './templates/Buttons/ShowcaseButtons.tsx';
import ShowcaseButtonIcons from './templates/IconButtons/ShowcaseIconButtons.tsx';
import ShowcaseCheckBoxes from './templates/Checkboxes/ShowcaseCheckBoxes.tsx';
import ShowcaseTextField from './templates/TextField/ShowcaseTextField.tsx';

const ShowcasePage = () => {
  return (
    <div
      style={{
        margin: '2em',
        display: 'flex',
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <ShowcaseButtons />
      <ShowcaseButtonIcons />
      <ShowcaseCheckBoxes />
      <ShowcaseTextField />
    </div>
  );
};

export default ShowcasePage;
