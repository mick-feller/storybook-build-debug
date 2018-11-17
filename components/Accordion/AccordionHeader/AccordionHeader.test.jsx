import React from 'react';
import { mount } from 'enzyme';

import { AccordionHeader } from './AccordionHeader';
import { DISPLAY_NAME_HEADER } from '../AccordionContext/AccordionContext';
import context from '../AccordionContext/__mocks__/context';

jest.mock('../AccordionContext/AccordionContext');

describe('AccordionHeader', () => {
  const component = mount(<AccordionHeader auid="Story">Here is my header</AccordionHeader>);
  const componentNoBg = mount(<AccordionHeader auid="Story" bg={false}>Here is my header</AccordionHeader>);

  it('Component Renders', () => {
    expect(component.exists()).toBe(true);
  });
  it('Header is Clicked', () => {
    component.find(`.od-row.${DISPLAY_NAME_HEADER}`).simulate('click');
    expect(context.toggleAccordion.mock.calls.length).toBe(1);
  });
  it('Heading is rendered', () => {
    expect(component.find('.od-heading').exists()).toBe(true);
  });
  it('Heading is rendered without background', () => {
    expect(componentNoBg.find('.od-accordion-header-no-bg').exists()).toBe(true);
  });
});
