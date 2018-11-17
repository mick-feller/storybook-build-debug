import {
  AccordionContext,
  DISPLAY_NAME,
  DISPLAY_NAME_CONTENT,
  DISPLAY_NAME_CONTAINER,
  DISPLAY_NAME_HEADER
} from './AccordionContext';

describe('AccordionContext', () => {
  it('Sets the display name', () => {
    expect(DISPLAY_NAME).toBe('od-accordion');
  });
  it('Sets the header display name', () => {
    expect(DISPLAY_NAME_HEADER).toBe('od-accordion-header');
  });
  it('Sets the content display name', () => {
    expect(DISPLAY_NAME_CONTENT).toBe('od-accordion-content');
  });
  it('Sets the container display name', () => {
    expect(DISPLAY_NAME_CONTAINER).toBe('od-accordion-container');
  });
  it('Checks if context is defined', () => {
    expect(AccordionContext).toBeDefined();
  });
});
