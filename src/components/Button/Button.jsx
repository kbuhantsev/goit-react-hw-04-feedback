import PropTypes from 'prop-types';
import React from 'react';
import { Button as ButtonStyle } from './Button.styled';
function Button({ title, onButtonClick, action }) {
  return (
    <ButtonStyle type="button" onClick={onButtonClick} data-action={action}>
      {title}
    </ButtonStyle>
  );
}
Button.propTypes = {
  title: PropTypes.string,
  onButtonClick: PropTypes.func,
  action: PropTypes.string,
};
export default Button;
