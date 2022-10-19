import { Box } from 'components/Box';
import Button from 'components/Button/Button';
import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash.capitalize';

function FeedbackOptions({ onButtonClick, buttons }) {
  return (
    <Box gridGap="10px">
      {buttons.map(button => (
        <Button
          key={button}
          title={capitalize(button)}
          onButtonClick={onButtonClick}
          action={button}
        />
      ))}
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onButtonClick: PropTypes.func,
};
export default FeedbackOptions;
