import React, { useContext } from 'react';
import { HeaderContext } from '../Header';
import cx from 'classnames';
import styles from './BurgerMenu.style';

const BurgerMenu = () => {
  const { menuIsOpen, toggleMenu } = useContext(HeaderContext);

  return (
    <div className="container" onClick={toggleMenu}>
      <div className={cx('bar', { change1: menuIsOpen })} />
      <div className={cx('bar', { change2: menuIsOpen })} />
      <div className={cx('bar', { change3: menuIsOpen })} />
      <style jsx>{styles}</style>
    </div>
  );
};

export default React.memo(BurgerMenu);
