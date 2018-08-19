import React from 'react';
import { Text, Heading } from 'rebass/emotion';
// import slug from 'slug';

export const Paragraph = props => <Text is="p" my={3} {...props} />;

export const H1 = props => (
  <Heading is="h1" my={[3, 4]} fontSize={[5, 6]} {...props} />
);

export const H2 = props => (
  <Heading is="h2" my={3} fontSize={[4, 5]} {...props} />
);

export const H3 = props => (
  <Heading is="h3" my={3} fontSize={[3, 4]} {...props} />
);

export const H4 = props => (
  <Heading is="h4" my={3} fontSize={[2, 3]} {...props} />
);

export const H5 = props => (
  <Heading is="h5" my={3} fontSize={[1, 2]} {...props} />
);
