import context from './context';

export const DISPLAY_NAME = 'accordion';
export const DISPLAY_NAME_HEADER = `${DISPLAY_NAME}-header`;
export const DISPLAY_NAME_CONTAINER = `${DISPLAY_NAME}-container`;
export const DISPLAY_NAME_CONTENT = `${DISPLAY_NAME}-content`;

export const AccordionContext = ({
  Consumer(props) {
    return props.children(context);
  }
});
