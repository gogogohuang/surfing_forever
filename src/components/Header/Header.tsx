import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './Header.style';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <BurgerMenu onClickCb={() => setIsOpen(!isOpen)} status={isOpen} />
      <div />
      <style jsx>{styles}</style>
    </header>
  );
}

export default Header;

