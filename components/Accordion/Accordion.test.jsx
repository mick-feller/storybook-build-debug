import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';

const Component = () => {
  return <div>Hello</div>;
};

describe('AccordionContent', () => {
  const component = mount(<Accordion auid="Story"><Component /></Accordion>);

  it('Component Renders', () => {
    expect(component.exists()).toBe(true);
  });
});
