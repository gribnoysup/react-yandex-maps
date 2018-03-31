import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import navigation from '../pages/navigation';

const NavigationBlock = ({ title: blockTitle, path: blockPath, pages }) => (
  <ul>
    {blockTitle && <h3>{blockTitle}</h3>}
    {pages.map(({ title, path, pages }) => (
      <li key={title}>
        {pages && pages.length > 0 ? (
          <NavigationBlock title={title} path={path} pages={pages} />
        ) : (
          <Link href={blockPath + path}>
            <a>{title}</a>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const NavigationPropType = {
  title: PropTypes.string,
  path: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.shape(NavigationPropType)),
};

NavigationBlock.propTypes = NavigationPropType;

const Navigation = () => <NavigationBlock pages={navigation} />;

export default Navigation;
