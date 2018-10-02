import React from 'react';
import styled from 'react-emotion';
import { Text, Heading as RebassHeading, Box, Flex } from 'rebass/emotion';
import textContent from 'react-addons-text-content';
import slugify from 'slugify';
import copy from 'clipboard-copy';

const CopyLink = styled(Box)`
  font-size: 0;
`;

const HeaderContainer = styled(Flex)`
  transition: transform 0.16s ease-in;
  transform: translateX(-40px);

  & ${CopyLink} {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.8);

    transition: opacity 0.3s ease-out;
  }

  &:hover {
    transform: translateX(0);

    ${CopyLink} {
      visibility: visible;
      opacity: 0.6;
    }
  }
`;

const Anchor = styled(Box)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -64px;
  }
`;

Anchor.defaultProps = {
  is: 'a',
};

const Heading = ({ withAnchor, children, ...props }) => {
  const text = textContent(children);
  const slug = slugify(text).toLowerCase();
  const href = `#${slug}`;

  if (withAnchor === false) {
    return <RebassHeading {...props}>{children}</RebassHeading>;
  }

  return (
    <HeaderContainer alignItems="baseline">
      <CopyLink
        is="a"
        href={href}
        m={2}
        onClick={event => {
          copy(event.currentTarget.href);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
      </CopyLink>
      <RebassHeading {...props}>
        <Anchor id={slug} aria-hidden="true" />
        {children}
      </RebassHeading>
    </HeaderContainer>
  );
};

Heading.defaultProps = {
  withAnchor: true,
};

export const Paragraph = props => <Text is="p" my={3} {...props} />;

export const H1 = props => (
  <Heading
    is="h1"
    withAnchor={false}
    my={[3, 4]}
    mt={[4, 5]}
    fontSize={[5, 6]}
    {...props}
  />
);

export const H2 = props => (
  <Heading is="h2" mb={[2, 3]} mt={[3, 4]} fontSize={[4, 5]} {...props} />
);

export const H3 = props => (
  <Heading is="h3" mb={[2, 3]} mt={[3, 4]} fontSize={[3, 4]} {...props} />
);

export const H4 = props => (
  <Heading is="h4" mb={[2, 3]} mt={[3, 4]} fontSize={[2, 3]} {...props} />
);

export const H5 = props => (
  <Heading is="h5" mb={[2, 3]} mt={[3, 4]} fontSize={[1, 2]} {...props} />
);
