import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <span style={{ fontSize: '18px' }}>{message}</span>;
}

Notification.propTypes = { message: PropTypes.string };

export default Notification;
