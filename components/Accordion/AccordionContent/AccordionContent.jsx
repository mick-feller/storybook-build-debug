import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { AccordionContext, DISPLAY_NAME_CONTENT, DISPLAY_NAME_CONTAINER } from '../AccordionContext/AccordionContext';

const AccordionContent = ({
  className,
  children,
  auid,
  bg
}) => {
  return (
    <AccordionContext.Consumer>
      {({
        open,
        height,
        container,
        content
      }) => {
        return (
          <Transition
            timeout={300}
            in={open}
            onExit={() => {
              container.current.style.maxHeight = `${height}px`;
            }}
            onExiting={() => {
              setTimeout(() => {
                container.current.style.maxHeight = 0;
              });
            }}
            onEntering={() => {
              container.current.style.maxHeight = `${height}px`;
            }}
            onEntered={() => {
              container.current.style.maxHeight = null;
            }}
          >
            <div
              className={`${DISPLAY_NAME_CONTAINER}`}
              ref={container}
              style={{ maxHeight: open ? null : 0 }}
            >
              <div
                className={classNames(
                  `${DISPLAY_NAME_CONTENT}`,
                  className,
                  { [`${DISPLAY_NAME_CONTENT}-no-bg`]: !bg }
                )}
                ref={content}
              >
                {children}
              </div>
            </div>
          </Transition>
        );
      }}
    </AccordionContext.Consumer>
  );
};

AccordionContent.propTypes = {
  auid: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bg: PropTypes.bool
};

AccordionContent.defaultProps = {
  className: '',
  bg: true
};

AccordionContent.displayName = DISPLAY_NAME_CONTENT;

export { AccordionContent };
