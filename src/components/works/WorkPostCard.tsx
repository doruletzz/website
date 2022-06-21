import React from 'react';
import { Card } from 'react-bootstrap';
import { useAppSelector } from '../../features/app/hooks';
import { ThemeType } from '../../types/theme';

import styles from './WorkPostCard.module.scss';

type WorkPostCardProps = {
  imageSrc: string;
  title: string;
  summary: string;
};

const WorkPostCard = ({ imageSrc, title, summary }: WorkPostCardProps) => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Card className={styles.card}>
        <Card.Img
          alt={title}
          variant='top'
          className={styles.img}
          src={imageSrc}
        />
        <Card.Body>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.text}>{summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkPostCard;
