import React from 'react';
import cx from 'classnames';
import styles from './BurgerMenu.style';

type BurgerMenuProps = {
  onClickCb: () => void;
  status: boolean;
}

const BurgerMenu = ({ onClickCb, status }: BurgerMenuProps) => {
  return (
    <div className='container' onClick={onClickCb}>
      <div className={cx('bar', { change1: status })} />
      <div className={cx('bar', { change2: status })} />
      <div className={cx('bar', { change3: status })} />
      <style jsx>{styles}</style>
    </div>
  );
}

export default React.memo(BurgerMenu, (prev, next) => (prev.status === next.status));
