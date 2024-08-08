import React from 'react';
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = ({ title, children }) => {
  return ( 
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={title} children={children} />
    </div>
  );
}
 
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const styles = StyleSheet.create({
  bodySectionWithMargin :{
    marginBottom: 40
  }
});

export default BodySectionWithMarginBottom;
