import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AccordionContext, DISPLAY_NAME_HEADER } from '../AccordionContext/AccordionContext';

const AccordionHeader = ({
  className,
  children,
  auid,
  bg
}) => {
  return (
    <AccordionContext.Consumer>
      {({ toggleAccordion, open }) => {
        return (
          <div
            className={
                classNames(
                  `${DISPLAY_NAME_HEADER}`,
                  className,
                  { [`${DISPLAY_NAME_HEADER}-no-bg`]: !bg }
                )
            }
            padding="sm"
            onClick={toggleAccordion}
          >
            <div className={`${DISPLAY_NAME_HEADER}-content`}>
              <h2>{children}</h2>
            </div>
          </div>
        );
      }}
    </AccordionContext.Consumer>
  );
};

AccordionHeader.propTypes = {
  auid: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  bg: PropTypes.bool
};

AccordionHeader.defaultProps = {
  className: '',
  heading: 'h3',
  bg: true
};

AccordionHeader.displayName = DISPLAY_NAME_HEADER;

export { AccordionHeader };
