import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import navigation from '../pages/navigation';

const NavigationBlock = ({ title: blockTitle, path: blockPath, pages }) => (
  <ul>
    {blockTitle &&
      blockPath && (
        <h4>
          <Link href={blockPath}>
            <a>{blockTitle}</a>
          </Link>
        </h4>
      )}
    {pages.map(({ title, path, pages }) => (
      <li key={title}>
        {pages && pages.length > 0 ? (
          <NavigationBlock title={title} path={path} pages={pages} />
        ) : (
          <Link href={(blockPath ? blockPath : '') + path}>
            <a>{title}</a>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const NavigationBlockPropType = {
  title: PropTypes.string,
  path: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.shape(NavigationBlockPropType)),
};

NavigationBlock.propTypes = NavigationBlockPropType;

const Navigation = () => <NavigationBlock pages={navigation} />;

export default Navigation;
