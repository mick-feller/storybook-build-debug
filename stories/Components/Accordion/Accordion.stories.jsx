import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion, { AccordionHeader, AccordionContent } from 'components/Accordion';

storiesOf('Components|Accordion', module)
  .addParameters({ jest: ['AccordionContext'] })
  .add('Accordion Example', () => {
    return (
      <Accordion auid="Story">
        <AccordionHeader auid="Story">
          Accordion Title
        </AccordionHeader>
        <AccordionContent auid="Story">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada ante
          vel libero elementum sollicitudin. Proin quis est neque. Curabitur mollis
          scelerisque odio, eget convallis nisi egestas sit amet. Duis ut iaculis
          dolor, id pretium justo. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra.
        </AccordionContent>
      </Accordion>
    );
  });
