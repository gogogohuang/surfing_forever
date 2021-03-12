import React from 'react';
import MenuCard from './MenuCard/MenuCard';

/** style */
import styles from './MenuList.style';

type MenuListProps = {
  isOpen: boolean;
};

const MenuList = ({ isOpen }: MenuListProps): JSX.Element => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-container">
      <MenuCard cardTitle="Forecast" destPath="/forecast" />
      <MenuCard cardTitle="Current" destPath="/current" />
      <style jsx>{styles}</style>
    </div>
  );
};

export default MenuList;
