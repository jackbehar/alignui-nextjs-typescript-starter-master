import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../ui/button-group';
/**
 * @uxpindocurl https://www.alignui.com/docs/ui/button-group
 * @uxpindescription Button groups are a set of buttons sticked together in a horizontal line.
 */
export default function ButtonGroupIcon(props) {
  return <Icon {...props} />;
}

ButtonGroupIcon.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * The ButtonGroup.Icon component is polymorphic, allowing you to change the underlying HTML element using the as prop.
   */
  as: PropTypes.string,
};
