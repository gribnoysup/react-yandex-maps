import React from 'react';
// import styled from 'react-emotion';
import {
  Toolbar,
  Text,
  Sticky,
  Box,
  // Link,
  ButtonOutline,
} from 'rebass/emotion';

import { version, name } from '../../../package.json';

// const Octocat = ({ className }) => (
//   <svg
//     version="1.1"
//     width="32"
//     height="32"
//     viewBox="0 0 16 16"
//     aria-hidden="true"
//     className={className}
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
//     />
//   </svg>
// );

// const NPM = ({ className }) => (
//   <svg
//     width="61"
//     height="24"
//     viewBox="0 0 18 7"
//     aria-hidden="true"
//     className={className}
//   >
//     <path
//       fill="currentColor"
//       d="M0 0h18v6H9v1H5V6H0V0zm1 5h2V2h1v3h1V1H1v4zm5-4v5h2V5h2V1H6zm2 1h1v2H8V2zm3-1v4h2V2h1v3h1V2h1v3h1V1h-6z"
//     />
//     <path
//       fill="transparent"
//       d="M1 5h2V2h1v3h1V1H1zM6 1v5h2V5h2V1H6zm3 3H8V2h1v2zM11 1v4h2V2h1v3h1V2h1v3h1V1z"
//     />
//   </svg>
// );

export const Header = () => (
  <Sticky
    zIndex={999999}
    // ^^^ Because of yandex-maps 😭
    top={0}
  >
    <Toolbar is="header">
      <ButtonOutline
        color="white"
        hover={{ 'background-color': 'white', color: 'black' }}
      >
        Menu
      </ButtonOutline>
      <Box ml="auto" fontSize={[1, 2]}>
        <Text px={1} fontFamily="mono" textAlign="right">
          {name}
        </Text>
        <Text
          px={1}
          pt={1}
          fontFamily="mono"
          textAlign="right"
          fontWeight="bold"
        >
          v{version}
        </Text>
      </Box>
      {/* <Box ml={2}>
        <Link
          color="white"
          href="http://bit.ly/github-react-yandex-maps"
          aria-label="React Yandex.Maps on GitHub"
        >
          <Octocat />
        </Link>
      </Box>
      <Box ml={2}>
        <Link
          color="white"
          href="http://bit.ly/github-react-yandex-maps"
          aria-label="React Yandex.Maps on GitHub"
        >
          <NPM />
        </Link>
      </Box> */}
    </Toolbar>
  </Sticky>
);
