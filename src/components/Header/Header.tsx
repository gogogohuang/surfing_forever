import React, { useState, createContext } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import MenuList from 'components/MenuList/MenuList';
import styles from './Header.style';

type HeaderContextDef = {
  menuIsOpen: boolean;
  toggleMenu: () => void;
};

export const HeaderContext = createContext<HeaderContextDef>({
  menuIsOpen: false,
  toggleMenu: null,
});

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const handleToggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <HeaderContext.Provider value={{ menuIsOpen, toggleMenu: handleToggleMenu }}>
      <header>
        <BurgerMenu />
        <MenuList isOpen={menuIsOpen} />
        <div />
      </header>
      <style jsx>{styles}</style>
    </HeaderContext.Provider>
  );
};

export default Header;
