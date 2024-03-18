import React, { useState } from 'react';
import Popover from 'react-popover';

const PopOver = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopover}>Show Info</button>
      <Popover
        isOpen={isOpen}
        body={content}
        preferPlace="below"
        onOuterAction={togglePopover}
      />
    </div>
  );
};

export default PopOver;
