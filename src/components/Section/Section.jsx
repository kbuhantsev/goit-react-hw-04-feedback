import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import React from 'react';

function Section({ title, children }) {
  return (
    <Box as="section" flexDirection="column" ml={[3]} mb={[4]}>
      {title && <h2 style={{ marginBottom: '20px' }}>{title}</h2>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
