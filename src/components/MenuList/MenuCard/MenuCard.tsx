import React, { useContext } from 'react';
import Routers from 'src/routes';
import { HeaderContext } from 'components/Header/Header';

/** style */
import styles from './MenuCard.style';

type Props = {
  destPath: string;
  cardTitle: string;
};

const MenuCard = ({ destPath, cardTitle }: Props): JSX.Element => {
  const { toggleMenu } = useContext(HeaderContext);

  const handleOnClick = () => {
    toggleMenu();
    Routers.Router.pushRoute(destPath);
  };

  return (
    <button type="button" onClick={handleOnClick} className="menu-card">
      {cardTitle}
      <style jsx>{styles}</style>
    </button>
  );
};

export default MenuCard;
