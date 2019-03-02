import React from 'react';
import { Text, Box, Flex, Link } from 'rebass/emotion';

export const Footer = () => (
  <Flex
    is="footer"
    p={3}
    flexDirection="column"
    alignItems="center"
    bg="gray"
    w={1}
  >
    <Box m={2}>
      <Text textAlign="center">
        License MIT. Copyright © 2016-present,{' '}
        <Link href="https://github.com/gribnoysup">Sergey Petushkov</Link>
      </Text>
    </Box>
    <Box m={2}>
      <Link href="http://bit.ly/github-react-yandex-maps">GitHub</Link> |{' '}
      <Link href="http://bit.ly/npm-react-yandex-maps">npm</Link>
    </Box>
  </Flex>
);
