import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';

export const BasicCard = (props: React.PropsWithChildren<{heading: string}>) => {
  const {heading} = props;

  return (
    <Card>
      <Card.Heading>{heading}</Card.Heading>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  );
};