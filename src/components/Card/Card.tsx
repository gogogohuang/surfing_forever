import React from 'react';
import Link from 'next/link'
import styles from './Card.style';

type CardProps = {
  link: string;
  title: string;
  subTitle?: string;
  externalLink?: boolean;
}

const Card = (props: CardProps) => {
  return (
    <Link href={props.link}>
      <div className="card-container">
        <h2>{props.title}</h2>
        <style jsx>{styles}</style>
      </div>
    </Link>
  );
}

export default Card;
