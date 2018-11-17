import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AccordionContext, DISPLAY_NAME } from './AccordionContext/AccordionContext';
import './Accordion.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);
    const { open } = this.props;

    this.state = {
      open: open || false,
      height: 0,
      container: React.createRef(),
      content: React.createRef()
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState((prevState) => {
      const { open, content } = prevState;
      return ({
        open: !open,
        height: content.current.offsetHeight
      });
    });
  }

  render() {
    const {
      className,
      auid,
      ...rest
    } = this.props;

    return (
      <AccordionContext.Provider
        value={{
          ...this.state,
          toggleAccordion: this.toggleAccordion
        }}
      >
        <div
          className={
            classNames(
              DISPLAY_NAME,
              className
            )
          }
          {...rest}
        />
      </AccordionContext.Provider>
    );
  }
}

Accordion.propTypes = {
  auid: PropTypes.string.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool
};

Accordion.defaultProps = {
  className: '',
  open: false
};

Accordion.displayName = DISPLAY_NAME;

export default Accordion;
